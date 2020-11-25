import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
  PaginationInput,
  PaginationOutput,
} from "src/globalLib/common/dtos/pagination.dto";
import { restaurant } from "../entities/restaurant.entity";

@InputType()
export class RestaurantsInput extends PaginationInput {}

@ObjectType()
export class RestaurantsOutput extends PaginationOutput {
  @Field(() => [restaurant], { nullable: true })
  results?: restaurant[];
}
