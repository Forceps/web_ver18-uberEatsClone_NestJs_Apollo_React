import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(() => restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [restaurant])
  restaurant(): Promise<restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  async createRestaurant(
    @Args() createReataurantDto: CreateRestaurantDto
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createReataurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
