import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class restaurant {
  @Field(() => Number)
  restaurant_id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  isVegan: number;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;

  @Field(() => String)
  categoryName: string;
}
