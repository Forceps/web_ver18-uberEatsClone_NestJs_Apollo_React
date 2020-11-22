import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { user } from "src/users/entities/user.entity";
import {
  CreateRestaurantInput,
  CreateRestaurantOutput,
} from "./dtos/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";
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

  async createRestaurant(
    owner: user,
    { name, coverImg, address, categoryName }: CreateRestaurantInput
  ): Promise<CreateRestaurantOutput> {
    try {
      const rfCategoryName = categoryName.trim().toLowerCase();
      const CategorySlug = rfCategoryName.replace(/ /g, "-");
      let category = await this.prisma.category.findOne({
        where: { slug: CategorySlug },
      });
      await this.prisma.restaurant.create({
        data: {
          name,
          address,
          coverImg,
          user: { connect: { id: owner.id } },
          category_categoryTorestaurant: category
            ? {
                connect: {
                  id: category.id,
                },
              }
            : {
                create: {
                  name: rfCategoryName,
                  slug: CategorySlug,
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

  async updateRestaurant({ id, data }: UpdateRestaurantDto): Promise<boolean> {
    try {
      await this.prisma.restaurant.update({
        where: { id },
        data,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
