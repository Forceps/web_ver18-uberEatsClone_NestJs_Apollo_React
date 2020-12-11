import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNumber } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { restaurant } from "src/restaurants/entities/restaurant.entity";
import { user } from "src/users/entities/user.entity";

@InputType("PaymentInputType", { isAbstract: true })
@ObjectType()
export class payment extends CoreEntity {
  @Field(() => Int)
  @IsNumber()
  transactionId: number;

  @Field(() => Int)
  @IsNumber()
  userId: number;

  @Field(() => Int)
  @IsNumber()
  restaurantId: number;

  @Field(() => user, { nullable: true })
  user?: user;

  @Field(() => restaurant, { nullable: true })
  restaurant?: restaurant;
}
