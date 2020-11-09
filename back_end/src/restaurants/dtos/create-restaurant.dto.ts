import { InputType, OmitType } from "@nestjs/graphql";
import { restaurant } from "../entities/restaurant.entity";

@InputType()
export class CreateRestaurantDto extends OmitType(restaurant, [
  "restaurant_id",
]) {}
