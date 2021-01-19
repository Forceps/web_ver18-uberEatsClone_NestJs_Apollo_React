import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import {
  NEW_COOKED_ORDER,
  NEW_ORDER_UPDATE,
  NEW_PENDING_ORDER,
  PUB_SUB,
} from "src/globalLib/common/common.constants";
import { user } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";
import { EditOrderInput, EditOrderOutput } from "./dtos/edit-order.dto";
import { GetOrderInput, GetOrderOutput } from "./dtos/get-order.dto";
import { GetOrdersInput, GetOrdersOutput } from "./dtos/get-orders.dto";
import { OrderUpdatesInput } from "./dtos/order-updates.dto";
import { TakeOrderInput, TakeOrderOutput } from "./dtos/take-order.dto";
import { order } from "./entities/order.entity";
import { OrderService } from "./order.service";

@Resolver(() => order)
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    @Inject(PUB_SUB) private readonly pubSub: PubSub
  ) {}

  @Mutation(() => CreateOrderOutput)
  @Role(["client"])
  createOrder(
    @AuthUser() authUser: user,
    @Args("input") createOrderInput: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    return this.orderService.createOrder(authUser, createOrderInput);
  }

  @Mutation(() => CreateOrderOutput)
  @Role(["any"])
  editOrder(
    @AuthUser() authUser: user,
    @Args("input") editOrderInput: EditOrderInput
  ): Promise<EditOrderOutput> {
    return this.orderService.editOrder(authUser, editOrderInput);
  }

  @Query(() => GetOrdersOutput)
  @Role(["any"])
  getOrders(
    @AuthUser() authUser: user,
    @Args("input") getOrdersInput: GetOrdersInput
  ): Promise<GetOrdersOutput> {
    return this.orderService.getOrders(authUser, getOrdersInput);
  }

  @Query(() => GetOrderOutput)
  @Role(["any"])
  getOrder(
    @AuthUser() authUser: user,
    @Args("input") getOrderInput: GetOrderInput
  ): Promise<GetOrderOutput> {
    return this.orderService.getOrder(authUser, getOrderInput);
  }

  @Subscription(() => order, {
    filter: ({ pendingOrders: { ownerId } }, _, { user }) => {
      return ownerId === user.id;
    },
    resolve: ({ pendingOrders: { order } }) => order,
  })
  @Role(["owner"])
  pendingOrders(@AuthUser() authUser: user) {
    return this.pubSub.asyncIterator(NEW_PENDING_ORDER);
  }

  @Subscription(() => order)
  @Role(["delivery"])
  cookedOrders() {
    return this.pubSub.asyncIterator(NEW_COOKED_ORDER);
  }

  @Subscription(() => order, {
    filter: (
      { orderUpdates: order }: { orderUpdates: order },
      { input }: { input: OrderUpdatesInput },
      { user }: { user: user }
    ) => {
      if (
        order.driver !== user.id &&
        order.customer !== user.id &&
        order.restaurant_orderTorestaurant.owner !== user.id
      ) {
        return false;
      }
      return order.id === input.id;
    },
  })
  @Role(["any"])
  orderUpdates(@Args("input") orderUpdatesInput: OrderUpdatesInput) {
    return this.pubSub.asyncIterator(NEW_ORDER_UPDATE);
  }

  @Mutation(() => TakeOrderOutput)
  @Role(["delivery"])
  takeOrder(
    @AuthUser() authUser: user,
    @Args("input") takeOrderInput: TakeOrderInput
  ): Promise<TakeOrderOutput> {
    return this.orderService.takeOrder(authUser, takeOrderInput);
  }
}
