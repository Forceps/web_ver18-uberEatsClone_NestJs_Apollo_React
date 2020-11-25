import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { restaurant } from "./restaurant.entity";

@InputType("CategoryInputType", { isAbstract: true })
@ObjectType()
export class category extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  coverImg?: string;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  slug: string;

  @Field(() => [restaurant], { nullable: true })
  restaurant?: restaurant[];
}
