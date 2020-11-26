import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { JsonValue } from "@prisma/client";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { m2m_dish_order } from "src/orders/entities/m2m_dish_order.entity";
import { restaurant } from "./restaurant.entity";

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

  @Field(() => Int)
  @IsNumber()
  price: number;

  @Field(() => String, { nullable: true })
  @IsString()
  photo?: string;

  @Field(() => String)
  @IsString()
  @Length(5, 140)
  description: string;

  @Field(() => Int)
  @IsNumber()
  restaurant: number;

  @Field(() => [DishOption], { nullable: true })
  options?: JsonValue;

  @Field(() => [restaurant], { nullable: true })
  restaurant_dishTorestaurant?: restaurant;

  @Field(() => [m2m_dish_order], { nullable: true })
  m2m_dish_order?: m2m_dish_order;
}
