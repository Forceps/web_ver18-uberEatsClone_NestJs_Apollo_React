import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { restaurant } from "../entities/restaurant.entity";

@InputType()
export class RestaurantInput {
  @Field(() => Number)
  restaurantId: number;
}

@ObjectType()
export class RestaurantOutput extends CoreOutput {
  @Field(() => restaurant, { nullable: true })
  restaurant?: restaurant;
}
