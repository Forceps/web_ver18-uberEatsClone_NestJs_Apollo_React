import { Injectable } from "@nestjs/common";
import { restaurantUpdateInput } from "@prisma/client";
import { PrismaService } from "src/globalLib/prisma.service";
import { user } from "src/users/entities/user.entity";
import { AllCategoriesOutput } from "./dtos/all-categories.dto";
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
import { restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<restaurant[] | null> {
    try {
      return this.prisma.restaurant.findMany();
    } catch (e) {
      console.log(e);
    }
  }

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
}
