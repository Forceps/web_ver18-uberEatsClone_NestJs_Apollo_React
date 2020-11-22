import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
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

  async createRestaurant({
    name,
    address,
    owner,
    category,
  }: CreateRestaurantDto): Promise<boolean> {
    try {
      await this.prisma.restaurant.create({
        data: {
          name,
          address,
          user: { connect: { id: owner } },
          category_categoryTorestaurant: { connect: { id: category } },
        },
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async updateRestaurant({ id, data }: UpdateRestaurantDto): Promise<boolean> {
    await this.prisma.restaurant.update({
      where: { id },
      data,
    });
    return true;
  }
}
