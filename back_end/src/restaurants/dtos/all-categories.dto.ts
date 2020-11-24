import { Field, ObjectType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { category } from "../entities/category.entity";

@ObjectType()
export class AllCategoriesOutput extends CoreOutput {
  @Field(() => [category], { nullable: true })
  categories?: category[];
}
