import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { JsonValue } from "@prisma/client";
import { IsNumber } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { dish, DishOption } from "src/restaurants/entities/dish.entity";
import { m2m_order_item_order } from "./m2m_order_item_order.entity";

@InputType("OrderItemInputType", { isAbstract: true })
@ObjectType()
export class order_item extends CoreEntity {
  @Field(() => Int)
  @IsNumber()
  id: number;

  @Field(() => Int, { nullable: true })
  dish?: number;

  @Field(() => [DishOption], { nullable: true })
  options?: JsonValue;

  @Field(() => dish, { nullable: true })
  dish_dishToorder_item?: dish;

  @Field(() => m2m_order_item_order, { nullable: true })
  m2m_order_item_order?: m2m_order_item_order;
}
