import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { dish } from "../entities/dish.entity";

@InputType()
export class EditDishInput extends PickType(PartialType(dish), [
  "name",
  "options",
  "price",
  "description",
]) {
  @Field(() => Number)
  dishId: number;
}

@ObjectType()
export class EditDishOutput extends CoreOutput {}
