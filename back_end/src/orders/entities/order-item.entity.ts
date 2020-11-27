import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { JsonValue } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { dish } from "src/restaurants/entities/dish.entity";
import { m2m_order_item_order } from "./m2m_order_item_order.entity";

@InputType("OrderItemOptionInputType", { isAbstract: true })
@ObjectType()
export class OrderItemOption {
  @Field(() => String)
  @IsString()
  name: string;
  @Field(() => String, { nullable: true })
  @IsString()
  choice?: string;
  @Field(() => Int, { nullable: true })
  @IsNumber()
  extra?: number;
}

@InputType("OrderItemInputType", { isAbstract: true })
@ObjectType()
export class order_item {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  dish?: number;

  @Field(() => [OrderItemOption], { nullable: true })
  options?: JsonValue;

  @Field(() => dish, { nullable: true })
  dish_dishToorder_item?: dish;

  @Field(() => m2m_order_item_order, { nullable: true })
  m2m_order_item_order?: m2m_order_item_order;
}
