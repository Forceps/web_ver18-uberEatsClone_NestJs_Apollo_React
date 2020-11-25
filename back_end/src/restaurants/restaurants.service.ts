import { Injectable } from "@nestjs/common";
import { restaurantUpdateInput } from "@prisma/client";
import { PrismaService } from "src/globalLib/prisma.service";
import { user } from "src/users/entities/user.entity";
import { AllCategoriesOutput } from "./dtos/all-categories.dto";
import { CategoryInput, CategoryOutput } from "./dtos/category.dto";
import {
  CreateRestaurantInput,
  CreateRestaurantOutput,
} from "./dtos/create-restaurant.dto";
import {
  DeleteRestaurantInput,
  DeleteRestaurantOutput,
} from "./dtos/delete-restaurant.dto";
import {
  EditRestaurantInput,
  EditRestaurantOutput,
} from "./dtos/edit-restaurant.dto";
import { RestaurantInput, RestaurantOutput } from "./dtos/restaurant.dto";
import { RestaurantsInput, RestaurantsOutput } from "./dtos/restaurants.dto";
import {
  SearchRestaurantInput,
  SearchRestaurantOutput,
} from "./dtos/search-restaurant.dto";
import { category } from "./entities/category.entity";

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async getOrCreateCategory(name: string): Promise<{ id: number }> {
    const rfCategoryName = name.trim().toLowerCase();
    const CategorySlug = rfCategoryName.replace(/ /g, "-");
    let category = await this.prisma.category.findOne({
      where: { slug: CategorySlug },
      select: { id: true },
    });
    if (!category) {
      category = await this.prisma.category.create({
        data: {
          name: rfCategoryName,
          slug: CategorySlug,
        },
        select: { id: true },
      });
    }
    return category;
  }

  async createRestaurant(
    owner: user,
    { name, coverImg, address, categoryName }: CreateRestaurantInput
  ): Promise<CreateRestaurantOutput> {
    try {
      const category = await this.getOrCreateCategory(categoryName);
      await this.prisma.restaurant.create({
        data: {
          name,
          address,
          coverImg,
          user: { connect: { id: owner.id } },
          category_categoryTorestaurant: {
            connect: {
              id: category.id,
            },
          },
        },
      });
      return {
        ok: true,
      };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
        error: e,
      };
    }
  }

  async editRestaurant(
    owner: user,
    { name, address, coverImg, categoryName, restaurantId }: EditRestaurantInput
  ): Promise<EditRestaurantOutput> {
    try {
      const restaurant = await this.prisma.restaurant.findOne({
        where: { id: restaurantId },
        select: {
          id: true,
          user: {
            select: {
              id: true,
            },
          },
        },
      });
      if (!restaurant) {
        return {
          ok: false,
          error: "Restaurant not found",
        };
      }
      if (owner.id !== restaurant.user.id) {
        return {
          ok: false,
          error: "You can't edit a restaurant that you don't own",
        };
      }
      let data: restaurantUpdateInput = { name, address, coverImg };
      if (categoryName) {
        data = {
          ...data,
          category_categoryTorestaurant: {
            connect: await this.getOrCreateCategory(categoryName),
          },
        };
      }
      await this.prisma.restaurant.update({
        where: { id: restaurantId },
        data,
      });
      return {
        ok: true,
      };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
        error: e,
      };
    }
  }

  async deleteRestaurant(
    owner: user,
    { restaurantId }: DeleteRestaurantInput
  ): Promise<DeleteRestaurantOutput> {
    try {
      const restaurant = await this.prisma.restaurant.findOne({
        where: { id: restaurantId },
        select: {
          id: true,
          user: {
            select: {
              id: true,
            },
          },
        },
      });
      if (!restaurant) {
        return {
          ok: false,
          error: "Restaurant not found",
        };
      }
      if (owner.id !== restaurant.user.id) {
        return {
          ok: false,
          error: "You can't delete a restaurant that you don't own",
        };
      }
      await this.prisma.restaurant.delete({
        where: { id: restaurantId },
      });
      return {
        ok: true,
      };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
        error: e,
      };
    }
  }

  async allCategories(): Promise<AllCategoriesOutput> {
    try {
      const categories = await this.prisma.category.findMany();
      return {
        ok: true,
        categories,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  countRestaurant(category: category) {
    return this.prisma.restaurant.count({
      where: {
        category_categoryTorestaurant: {
          id: category.id,
        },
      },
    });
  }

  async findCategoryBySlug({
    slug,
    page,
  }: CategoryInput): Promise<CategoryOutput> {
    try {
      const category = await this.prisma.category.findOne({
        where: { slug },
        include: {
          restaurant: {
            take: 25,
            skip: (page - 1) * 25,
          },
        },
      });
      if (!slug) {
        return {
          ok: false,
          error: "Category not found",
        };
      }
      const totalResults = await this.countRestaurant(category);
      return {
        ok: true,
        category,
        totalPages: Math.ceil(totalResults / 25),
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async allRestaurants({ page }: RestaurantsInput): Promise<RestaurantsOutput> {
    try {
      const restaurants = await this.prisma.restaurant.findMany({
        take: 25,
        skip: (page - 1) * 25,
      });
      const allRestaurantsCount = await this.prisma.restaurant.count();
      return {
        ok: true,
        results: restaurants,
        totalPages: Math.ceil(allRestaurantsCount / 25),
        totalResults: allRestaurantsCount,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async findRestaurantById({
    restaurantId,
  }: RestaurantInput): Promise<RestaurantOutput> {
    try {
      const restaurant = await this.prisma.restaurant.findOne({
        where: { id: restaurantId },
      });
      if (!restaurant) {
        return {
          ok: false,
          error: "Restaurant not found",
        };
      }
      return {
        ok: true,
        results: restaurant,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async searchRestaurantByName({
    query,
    page,
  }: SearchRestaurantInput): Promise<SearchRestaurantOutput> {
    try {
      const restaurants = await this.prisma.restaurant.findMany({
        where: {
          name: { contains: query },
        },
        take: 25,
        skip: (page - 1) * 25,
      });
      const totalResults = restaurants.length;
      return {
        ok: true,
        restaurants,
        totalResults,
        totalPages: Math.ceil(totalResults / 25),
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
