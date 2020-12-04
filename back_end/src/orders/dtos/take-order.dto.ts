import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order } from "../entities/order.entity";

@InputType()
export class TakeOrderInput extends PickType(order, ["id"]) {}

@ObjectType()
export class TakeOrderOutput extends CoreOutput {}
