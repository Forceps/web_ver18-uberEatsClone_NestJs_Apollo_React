import { Field, InputType, ObjectType } from "@nestjs/graphql";
import {
  PaginationInput,
  PaginationOutput,
} from "src/globalLib/common/dtos/pagination.dto";
import { category } from "../entities/category.entity";

@InputType()
export class CategoryInput extends PaginationInput {
  @Field(() => String)
  slug: string;
}

@ObjectType()
export class CategoryOutput extends PaginationOutput {
  @Field(() => category, { nullable: true })
  category?: category;
}
