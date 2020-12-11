import { Resolver } from "@nestjs/graphql";
import { payment } from "./entities/payment.entity";

@Resolver(() => payment)
export class RestaurantResolver {
  constructor(private readonly PaymentsService: PaymentsService) {}

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

  @Query(() => RestaurantsOutput)
  restaurants(
    @Args("input") restaurantsInput: RestaurantsInput
  ): Promise<RestaurantsOutput> {
    return this.restaurantService.allRestaurants(restaurantsInput);
  }
}
