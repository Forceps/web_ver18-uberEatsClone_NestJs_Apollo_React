import { Field, InputType, Int, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order } from "../entities/order.entity";

@InputType()
export class CreateOrderInput extends PickType(order, [
  "m2m_order_item_order",
]) {
  @Field(() => Int)
  restaurantId: number;
}

@ObjectType()
export class CreateOrderOutput extends CoreOutput {}
