import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { user, UserRole } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";
import { order_item } from "src/orders/entities/order-item.entity";
import { GetOrdersInput, GetOrdersOutput } from "./dtos/get-orders.dto";
import { order, orderWhereInput } from "@prisma/client";
import { GetOrderInput, GetOrderOutput } from "./dtos/get-order.dto";
import { EditOrderInput, EditOrderOutput } from "./dtos/edit-order.dto";

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
      let orderFinalPrice = 0;
      const orderItems: order_item[] = [];
      for (const item of items) {
        const dish: {
          id: number;
          options: any;
          price: number;
        } = await this.prisma.dish.findOne({
          where: { id: item.dishId },
          select: { id: true, options: true, price: true },
        });
        if (!dish) {
          return {
            ok: false,
            error: "Dish not found",
          };
        }
        let dishFinalPrice = dish.price;
        for (const itemOption of item.options) {
          const dishOption = dish.options.find(
            (dishOption) => dishOption.name === itemOption.name
          );
          if (dishOption) {
            if (dishOption.extra) {
              dishFinalPrice = dishFinalPrice + dishOption.extra;
            } else {
              const dishOptionChoice = dishOption.choices.find(
                (optionChoice) => optionChoice.name === itemOption.choice
              );
              if (dishOptionChoice && dishOptionChoice.extra) {
                dishFinalPrice = dishFinalPrice + dishOptionChoice.extra;
              }
            }
          }
        }
        orderFinalPrice = orderFinalPrice + dishFinalPrice;
        const orderItem = await this.prisma.order_item.create({
          data: {
            dish_dishToorder_item: {
              connect: { id: dish.id },
            },
            options: item.options as any,
          },
          select: { id: true },
        });
        orderItems.push(orderItem);
      }
      const order = await this.prisma.order.create({
        data: {
          user_order_customerTouser: {
            connect: { id: customer.id },
          },
          restaurant_orderTorestaurant: {
            connect: { id: restaurantId },
          },
          total: orderFinalPrice,
        },
        select: { id: true },
      });
      for (const orderItem of orderItems) {
        this.prisma.m2m_order_item_order.create({
          data: {
            order_m2m_order_item_orderToorder: {
              connect: { id: order.id },
            },
            order_item_m2m_order_item_orderToorder_item: {
              connect: { id: orderItem.id },
            },
          },
        });
      }
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

  async editOrder(
    customer: user,
    { restaurantId, items }: EditOrderInput
  ): Promise<EditOrderOutput> {
    try {
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

  async getOrders(
    user: user,
    { status }: GetOrdersInput
  ): Promise<GetOrdersOutput> {
    try {
      let orderWhereInput: orderWhereInput = {};
      if (user.role === UserRole.client) {
        orderWhereInput = { customer: user.id };
      } else if (user.role === UserRole.delivery) {
        orderWhereInput = { driver: user.id };
      } else if (user.role === UserRole.owner) {
        orderWhereInput = {
          restaurant_orderTorestaurant: {
            owner: user.id,
          },
        };
      } else {
        return {
          ok: false,
          error: "No role assigned",
        };
      }
      if (status) {
        orderWhereInput = { ...orderWhereInput, status };
      }
      const orders = await this.prisma.order.findMany({
        where: orderWhereInput,
      });
      return {
        ok: true,
        orders,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async getOrder(
    user: user,
    { id: orderId }: GetOrderInput
  ): Promise<GetOrderOutput> {
    try {
      const order = await this.prisma.order.findOne({
        where: { id: orderId },
        include: {
          restaurant_orderTorestaurant: { select: { owner: true } },
        },
      });
      if (!order) {
        return {
          ok: false,
          error: "Order not found",
        };
      }
      if (
        (user.role === UserRole.client && order.customer !== user.id) ||
        (user.role === UserRole.delivery && order.driver !== user.id) ||
        (user.role === UserRole.owner &&
          order.restaurant_orderTorestaurant.owner !== user.id)
      ) {
        return {
          ok: false,
          error: "You can't see that",
        };
      }
      return {
        ok: true,
        order,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}