import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import { user, UserRole } from "src/users/entities/user.entity";
import { AllCategoriesOutput } from "./dtos/all-categories.dto";
import { CategoryInput, CategoryOutput } from "./dtos/category.dto";
import {
  CreateRestaurantInput,
  CreateRestaurantOutput,
} from "./dtos/create-restaurant.dto";
import {
  DeleteRestaurantInput,
  DeleteRestaurantOutput,
} from "./dtos/delete-restaurant.dto";
import {
  EditRestaurantInput,
  EditRestaurantOutput,
} from "./dtos/edit-restaurant.dto";
import { RestaurantInput, RestaurantOutput } from "./dtos/restaurant.dto";
import { RestaurantsInput, RestaurantsOutput } from "./dtos/restaurants.dto";
import {
  SearchRestaurantInput,
  SearchRestaurantOutput,
} from "./dtos/search-restaurant.dto";
import { category } from "./entities/category.entity";
import { restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(() => restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

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

  @Mutation(() => EditRestaurantOutput)
  @Role(["owner"])
  editRestaurant(
    @AuthUser() authUser: user,
    @Args("input") editRestaurantInput: EditRestaurantInput
  ): Promise<EditRestaurantOutput> {
    return this.restaurantService.editRestaurant(authUser, editRestaurantInput);
  }

  @Mutation(() => EditRestaurantOutput)
  @Role(["owner"])
  deleteRestaurant(
    @AuthUser() authUser: user,
    @Args("input") deleteRestaurantInput: DeleteRestaurantInput
  ): Promise<DeleteRestaurantOutput> {
    return this.restaurantService.deleteRestaurant(
      authUser,
      deleteRestaurantInput
    );
  }

  @Query(() => RestaurantsOutput)
  restaurants(
    @Args("input") restaurantsInput: RestaurantsInput
  ): Promise<RestaurantsOutput> {
    return this.restaurantService.allRestaurants(restaurantsInput);
  }

  @Query(() => RestaurantOutput)
  restaurant(
    @Args("input") restaurantInput: RestaurantInput
  ): Promise<RestaurantOutput> {
    return this.restaurantService.findRestaurantById(restaurantInput);
  }

  @Query(() => SearchRestaurantOutput)
  searchRestaurant(
    @Args("input") searchRestaurantInput: SearchRestaurantInput
  ): Promise<SearchRestaurantOutput> {
    return this.restaurantService.searchRestaurantByName(searchRestaurantInput);
  }
}

@Resolver(() => category)
export class CategoryResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @ResolveField(() => Number)
  restaurantCount(@Parent() category: category): Promise<number> {
    return this.restaurantService.countRestaurant(category);
  }

  @Query(() => AllCategoriesOutput)
  allCategories(): Promise<AllCategoriesOutput> {
    return this.restaurantService.allCategories();
  }

  @Query(() => CategoryOutput)
  category(
    @Args("input") categoryInput: CategoryInput
  ): Promise<CategoryOutput> {
    return this.restaurantService.findCategoryBySlug(categoryInput);
  }
}
