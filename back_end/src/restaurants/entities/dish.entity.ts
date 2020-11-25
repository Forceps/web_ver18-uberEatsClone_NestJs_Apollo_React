import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType("DishInputType", { isAbstract: true })
@ObjectType()
export class dish extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => Number)
  @IsNumber()
  price: number;

  @Field(() => String)
  @IsString()
  photo: string;

  @Field(() => String)
  @IsString()
  @Length(5, 140)
  description: string;

  @Field(() => Number)
  @IsNumber()
  restaurant: number;
}
