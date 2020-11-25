import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
  PaginationInput,
  PaginationOutput,
} from "src/globalLib/common/dtos/pagination.dto";
import { restaurant } from "../entities/restaurant.entity";

@InputType()
export class SearchRestaurantInput extends PaginationInput {
  @Field(() => String)
  query: string;
}

@ObjectType()
export class SearchRestaurantOutput extends PaginationOutput {
  @Field(() => [restaurant], { nullable: true })
  restaurants?: restaurant[];
}
