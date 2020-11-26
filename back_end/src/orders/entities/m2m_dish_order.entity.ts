import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { dish } from "src/restaurants/entities/dish.entity";
import { order } from "./order.entity";

@InputType("m2m_dish_orderInputType", { isAbstract: true })
@ObjectType()
export class m2m_dish_order {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  dish?: number;

  @Field(() => Int)
  @IsNumber()
  order: number;

  @Field(() => [dish], { nullable: true })
  dish_dishTom2m_dish_order?: dish[];

  @Field(() => [order])
  order_m2m_dish_orderToorder: order[];
}
