import { Injectable } from "@nestjs/common";
import { restaurantCreateInput } from "@prisma/client";
import { PrismaService } from "src/globalLib/prisma.service";
import { UpdateRestaurantDto } from "./dtos/update-restaurant.dto";
import { restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<restaurant[] | null> {
    return this.prisma.restaurant.findMany();
  }

  async createRestaurant(data: restaurantCreateInput): Promise<boolean> {
    await this.prisma.restaurant.create({
      data,
    });
    return true;
  }

  async updateRestaurant({
    restaurant_id,
    data,
  }: UpdateRestaurantDto): Promise<boolean> {
    await this.prisma.restaurant.update({
      where: { restaurant_id },
      data,
    });
    return true;
  }
}
