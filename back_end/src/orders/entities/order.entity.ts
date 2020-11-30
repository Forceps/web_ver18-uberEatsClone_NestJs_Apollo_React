import {
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import { IsEnum, IsNumber } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { restaurant } from "src/restaurants/entities/restaurant.entity";
import { user } from "src/users/entities/user.entity";
import { m2m_order_item_order } from "./m2m_order_item_order.entity";

export enum OrderStatus {
  pending = "pending",
  cooking = "cooking",
  pickedUp = "pickedUp",
  delivered = "delivered",
}

registerEnumType(OrderStatus, { name: "OrderStatus" });

@InputType("OrderInputType", { isAbstract: true })
@ObjectType()
export class order extends CoreEntity {
  @Field(() => Int, { nullable: true })
  @IsNumber()
  customer?: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  driver?: number;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  restaurant?: number;

  @Field(() => Float)
  @IsNumber()
  total: number;

  @Field(() => OrderStatus)
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @Field(() => user, { nullable: true })
  user_order_customerTouser?: user;

  @Field(() => user, { nullable: true })
  user_order_driverTouser?: user;

  @Field(() => restaurant, { nullable: true })
  restaurant_orderTorestaurant?: restaurant;

  @Field(() => [m2m_order_item_order])
  m2m_order_item_order?: m2m_order_item_order[];
}
