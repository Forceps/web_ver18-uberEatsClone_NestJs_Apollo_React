import { InputType, PickType } from "@nestjs/graphql";
import { order } from "../entities/order.entity";

@InputType()
export class OrderUpdatesInput extends PickType(order, ["id"]) {}
