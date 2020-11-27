import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { order_item } from "./order-item.entity";
import { order } from "./order.entity";

@InputType("m2m_dish_orderInputType", { isAbstract: true })
@ObjectType()
export class m2m_order_item_order {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  order_item?: number;

  @Field(() => Int)
  @IsNumber()
  order: number;

  @Field(() => [order_item], { nullable: true })
  order_item_m2m_order_item_orderToorder_item?: order_item[];

  @Field(() => [order])
  order_m2m_order_item_orderToorder: order[];
}
