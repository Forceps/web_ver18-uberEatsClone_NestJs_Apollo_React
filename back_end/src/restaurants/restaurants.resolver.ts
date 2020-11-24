import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import { user, UserRole } from "src/users/entities/user.entity";
import {
  CreateRestaurantInput,
  CreateRestaurantOutput,
} from "./dtos/create-restaurant.dto";
import {
  EditRestaurantInput,
  EditRestaurantOutput,
} from "./dtos/edit-restaurant.dto";
import { restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(() => restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [restaurant])
  restaurant(): Promise<restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => CreateRestaurantOutput)
  @Role([UserRole.owner])
  createRestaurant(
    @AuthUser() authUser: user,
    @Args("input") createReataurantInput: CreateRestaurantInput
  ): Promise<CreateRestaurantOutput> {
    return this.restaurantService.createRestaurant(
      authUser,
      createReataurantInput
    );
  }

  @Mutation(() => Boolean)
  @Role(["owner"])
  editRestaurant(
    @AuthUser() authUser: user,
    @Args("input") editRestaurantInput: EditRestaurantInput
  ): Promise<EditRestaurantOutput> {
    return this.restaurantService.editRestaurant(authUser, editRestaurantInput);
  }
}
