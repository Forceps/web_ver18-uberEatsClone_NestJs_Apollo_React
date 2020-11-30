import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { order } from "@prisma/client";
import { IsEnum } from "class-validator";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order as orderE, OrderStatus } from "../entities/order.entity";

@InputType()
export class GetOrdersInput {
  @Field(() => OrderStatus, { nullable: true })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

@ObjectType()
export class GetOrdersOutput extends CoreOutput {
  @Field(() => [orderE], { nullable: true })
  orders?: order[];
}
