import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { order } from "@prisma/client";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order as orderE } from "../entities/order.entity";

@InputType()
export class GetOrderInput extends PickType(orderE, ["id"]) {}

@ObjectType()
export class GetOrderOutput extends CoreOutput {
  @Field(() => [orderE], { nullable: true })
  order?: order;
}
