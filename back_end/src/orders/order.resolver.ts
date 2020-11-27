import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import { user } from "src/users/entities/user.entity";
import { CreateOrderInput, CreateOrderOutput } from "./dtos/create-order.dto";
import { order } from "./entities/order.entity";
import { OrderService } from "./order.service";

@Resolver(() => order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => CreateOrderOutput)
  @Role(["client"])
  createOrder(
    @AuthUser() authUser: user,
    @Args("input") createOrderInput: CreateOrderInput
  ): Promise<CreateOrderOutput> {
    return this.orderService.(CreateOrderInput);
  }

  @Mutation(() => EditProfileOutput)
  @Role(["any"])
  editProfile(
    @AuthUser() authUser: user,
    @Args("input") editProfileInput: EditProfileInput
  ): Promise<EditProfileOutput> {
    return this.usersService.editProfile(authUser.id, editProfileInput);
  }
}
