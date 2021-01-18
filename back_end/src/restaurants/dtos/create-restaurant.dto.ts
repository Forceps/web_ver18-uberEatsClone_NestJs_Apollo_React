import { Field, InputType, Int, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { restaurant } from "../entities/restaurant.entity";

@InputType()
export class CreateRestaurantInput extends PickType(restaurant, [
  "name",
  "coverImg",
  "address",
]) {
  @Field(() => String)
  categoryName: string;
}

@ObjectType()
export class CreateRestaurantOutput extends CoreOutput {
  @Field(() => Int, { nullable: true })
  restaurantId?: number;
}
