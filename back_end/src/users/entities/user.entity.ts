import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsEnum, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { order } from "src/orders/entities/order.entity";
import { payment } from "src/payments/entities/payment.entity";
import { restaurant } from "src/restaurants/entities/restaurant.entity";
import { verification } from "./verification.entity";

export enum UserRole {
  client = "client",
  owner = "owner",
  delivery = "delivery",
}

registerEnumType(UserRole, { name: "UserRole" });

@InputType("UserInputType", { isAbstract: true })
@ObjectType()
export class user extends CoreEntity {
  @Field(() => String)
  @IsEmail()
  @Length(2, 80)
  email: string;

  @Field(() => Boolean)
  @IsBoolean()
  verified: boolean;

  @Field(() => String)
  @IsString()
  @Length(2, 70)
  password: string;

  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @Field(() => [order], { nullable: true })
  order_order_customerTouser?: order[];

  @Field(() => [order], { nullable: true })
  order_order_driverTouser?: order[];

  @Field(() => [payment], { nullable: true })
  payment?: payment[];

  @Field(() => [restaurant], { nullable: true })
  restaurant?: restaurant[];

  @Field(() => [verification], { nullable: true })
  verification?: verification[];
}
