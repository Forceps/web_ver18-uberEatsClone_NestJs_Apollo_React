import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { user } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(
    customer: user,
    { restaurantId, items }: CreateOrderInput
  ): Promise<CreateOrderOutput> {
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
      items.forEach(async (item) => {
        const dish = await this.prisma.dish.findOne({
          where: { id: item.dishId },
          select: {id: true}
        });
        if (!dish) {
          //dfas
        }
        await this.prisma.order_item.create({
          data: {
            dish_dishToorder_item:{
              connect: {id: dish.id}
            },
            options: 
          },
        });
      });
      const order = await this.prisma.order.create({
        data: {
          user_order_customerTouser: {
            connect: { id: customer.id },
          },
          restaurant_orderTorestaurant: {
            connect: { id: restaurantId },
          },
        },
      });
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
