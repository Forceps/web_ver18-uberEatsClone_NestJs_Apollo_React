import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { payment } from "../entities/payment.entity";

@InputType()
export class CreatePaymentInput extends PickType(payment, [
  "transactionId",
  "restaurantId",
]) {}

@ObjectType()
export class CreatePaymentOutput extends CoreOutput {}
