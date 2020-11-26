import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { JsonValue } from "@prisma/client";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType("DishChoiceInputType", { isAbstract: true })
@ObjectType()
class DishChoice {
  @Field(() => String)
  name: string;
  @Field(() => Number, { nullable: true })
  extra?: number;
}

@InputType("DishOptionInputType", { isAbstract: true })
@ObjectType()
class DishOption {
  @Field(() => String)
  name: string;
  @Field(() => [String], { nullable: true })
  choice?: DishChoice[];
  @Field(() => Number, { nullable: true })
  extra?: number;
}

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

  @Field(() => String, { nullable: true })
  @IsString()
  photo?: string;

  @Field(() => String)
  @IsString()
  @Length(5, 140)
  description: string;

  @Field(() => Number)
  @IsNumber()
  restaurant: number;

  @Field(() => [DishOption], { nullable: true })
  options?: JsonValue;
}
