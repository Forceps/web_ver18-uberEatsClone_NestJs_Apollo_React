import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { user, UserRole } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";
import { order_item } from "src/orders/entities/order-item.entity";
import { GetOrdersInput, GetOrdersOutput } from "./dtos/get-orders.dto";
import { order, orderWhereInput } from "@prisma/client";
import { GetOrderInput, GetOrderOutput } from "./dtos/get-order.dto";
import { EditOrderInput, EditOrderOutput } from "./dtos/edit-order.dto";
import { OrderStatus } from "./entities/order.entity";
import {
  NEW_COOKED_ORDER,
  NEW_ORDER_UPDATE,
  NEW_PENDING_ORDER,
  PUB_SUB,
} from "src/globalLib/common/common.constants";
import { PubSub } from "graphql-subscriptions";
import { TakeOrderInput, TakeOrderOutput } from "./dtos/take-order.dto";

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    @Inject(PUB_SUB) private readonly pubSub: PubSub
  ) {}

  async createOrder(
    customer: user,
    { restaurantId, items }: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    try {
      const restaurant = await this.prisma.restaurant.findOne({
        where: { id: restaurantId },
        select: { owner: true },
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
      await this.pubSub.publish(NEW_PENDING_ORDER, {
        pendingOrders: { order, ownerId: restaurant.owner },
      });
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: "error catched",
      };
    }
  }

  async editOrder(
    user: user,
    { id: orderId, status }: EditOrderInput
  ): Promise<EditOrderOutput> {
    try {
      const gettedOrder = await this.getOrder(user, { id: orderId });
      if (!gettedOrder.ok) {
        return {
          ok: false,
          error: gettedOrder.error,
        };
      }
      let canEdit = true;
      switch (user.role) {
        case UserRole.client:
          canEdit = false;
          break;
        case UserRole.owner:
          if (status !== OrderStatus.cooking && status !== OrderStatus.cooked) {
            canEdit = false;
          }
          break;
        case UserRole.delivery:
          if (
            status !== OrderStatus.pickedUp &&
            status !== OrderStatus.delivered
          ) {
            canEdit = false;
          }
      }
      if (!canEdit) {
        return {
          ok: false,
          error: "You can't do that",
        };
      }
      const newOrder = await this.prisma.order.update({
        where: { id: orderId },
        data: {
          status: status as any,
        },
      });
      if (user.role === UserRole.owner) {
        if (status === OrderStatus.cooked) {
          await this.pubSub.publish(NEW_COOKED_ORDER, {
            cookedOrders: newOrder,
          });
        }
      }
      await this.pubSub.publish(NEW_ORDER_UPDATE, {
        orderUpdates: newOrder,
      });
      return {
        ok: true,
      };
    } catch (e) {
      return {
        ok: false,
        error: "error catched",
      };
    }
  }

  async getOrders(
    user: user,
    { status }: GetOrdersInput
  ): Promise<GetOrdersOutput> {
    try {
      let orderWhereInput: orderWhereInput = {};
      switch (user.role) {
        case UserRole.client:
          orderWhereInput = { customer: user.id };
          break;
        case UserRole.owner:
          orderWhereInput = { driver: user.id };
          break;
        case UserRole.delivery:
          orderWhereInput = {
            restaurant_orderTorestaurant: {
              owner: user.id,
            },
          };
      }
      if (status) {
        orderWhereInput = { ...orderWhereInput, status: status as any };
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
        error: "error catched",
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
        error: "error catched",
      };
    }
  }

  async takeOrder(
    driver: user,
    { id }: TakeOrderInput
  ): Promise<TakeOrderOutput> {
    try {
      const oldOrder = await this.getOrder(driver, { id });
      if (!oldOrder.ok) {
        return {
          ok: false,
          error: oldOrder.error,
        };
      }
      if (oldOrder.order.driver) {
        return {
          ok: false,
          error: "This order already has a driver",
        };
      }
      const newOrder = await this.prisma.order.update({
        where: { id },
        data: {
          user_order_driverTouser: {
            connect: { id: driver.id },
          },
        },
        include: { user_order_driverTouser: true },
      });
      await this.pubSub.publish(NEW_ORDER_UPDATE, {
        orderUpdates: newOrder,
      });
      return {
        ok: true,
      };
    } catch {
      return {
        ok: false,
        error: "error catched at 'takeOrder' function in 'order.service.ts'",
      };
    }
  }
}
