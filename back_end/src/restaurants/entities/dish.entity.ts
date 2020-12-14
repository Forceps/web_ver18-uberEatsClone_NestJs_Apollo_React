import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { JsonValue } from "@prisma/client";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { order_item } from "src/orders/entities/order-item.entity";
import { restaurant } from "./restaurant.entity";

@InputType("DishChoiceInputType", { isAbstract: true })
@ObjectType()
export class DishChoice {
  @Field(() => String)
  @IsString()
  name: string;
  @Field(() => Number, { nullable: true })
  @IsNumber()
  extra?: number;
}

@InputType("DishOptionInputType", { isAbstract: true })
@ObjectType()
export class DishOption {
  @Field(() => String)
  @IsString()
  name: string;
  @Field(() => [String], { nullable: true })
  choice?: DishChoice[];
  @Field(() => Number, { nullable: true })
  @IsNumber()
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
  restaurantId: number;

  @Field(() => [DishOption], { nullable: true })
  options?: JsonValue;

  @Field(() => [restaurant], { nullable: true })
  restaurant?: restaurant;

  @Field(() => [order_item], { nullable: true })
  order_item?: order_item;
}
