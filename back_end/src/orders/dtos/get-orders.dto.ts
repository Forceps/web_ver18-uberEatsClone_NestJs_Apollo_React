import { Field, InputType, Int, ObjectType, PickType } from "@nestjs/graphql";
import { IsEnum } from "class-validator";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order, OrderStatus } from "../entities/order.entity";

@InputType()
export class GetOrdersInput {
  @Field(() => OrderStatus, { nullable: true })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

@ObjectType()
export class GetOrdersOutput extends CoreOutput {
  @Field(() => [order], { nullable: true })
  orders?: order[];
}
