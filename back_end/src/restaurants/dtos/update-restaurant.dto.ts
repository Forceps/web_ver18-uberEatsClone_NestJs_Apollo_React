import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateRestaurantInput } from "./create-restaurant.dto";

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantInput
) {}

@InputType()
export class UpdateRestaurantDto {
  @Field(() => Number)
  id: number;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
