import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { order } from "../entities/order.entity";

@InputType()
export class EditOrderInput extends PickType(order, ["id", "status"]) {}

@ObjectType()
export class EditOrderOutput extends CoreOutput {}
