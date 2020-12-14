import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { payment } from "../entities/payment.entity";

@InputType()
export class GetPaymentInput extends PickType(payment, [
  "transactionId",
  "restaurantId",
]) {}

@ObjectType()
export class GetPaymentOutput extends CoreOutput {
  @Field(() => [payment], { nullable: true })
  payments?: payment[];
}
