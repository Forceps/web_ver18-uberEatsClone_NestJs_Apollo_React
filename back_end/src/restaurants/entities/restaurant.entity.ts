import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { order } from "src/orders/entities/order.entity";
import { payment } from "src/payments/entities/payment.entity";
import { user } from "src/users/entities/user.entity";
import { category } from "./category.entity";
import { dish } from "./dish.entity";

@InputType("RestaurantInputType", { isAbstract: true })
@ObjectType()
export class restaurant extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  coverImg?: string;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  address: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  category?: number;

  @Field(() => Int)
  @IsNumber()
  owner: number;

  @Field(() => category, { nullable: true })
  category_categoryTorestaurant?: category;

  @Field(() => user, { nullable: true })
  user?: user;

  @Field(() => [dish], { nullable: true })
  dish?: dish[];

  @Field(() => [order], { nullable: true })
  orders?: order[];

  @Field(() => [payment], { nullable: true })
  payment?: payment[];
}
