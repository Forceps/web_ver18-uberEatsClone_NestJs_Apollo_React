import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import { user } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";
import { EditOrderInput, EditOrderOutput } from "./dtos/edit-order.dto";
import { GetOrderInput, GetOrderOutput } from "./dtos/get-order.dto";
import { GetOrdersInput, GetOrdersOutput } from "./dtos/get-orders.dto";
import { order } from "./entities/order.entity";
import { OrderService } from "./order.service";

const pubsub = new PubSub();

@Resolver(() => order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

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

  @Query(() => GetOrdersOutput)
  @Role(["any"])
  getOrder(
    @AuthUser() authUser: user,
    @Args("input") getOrderInput: GetOrderInput
  ): Promise<GetOrderOutput> {
    return this.orderService.getOrder(authUser, getOrderInput);
  }

  @Subscription(() => String)
  orderSubscription() {
    return pubsub.asyncIterator("hotPotatos");
  }
}
