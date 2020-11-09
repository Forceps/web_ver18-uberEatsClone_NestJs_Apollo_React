import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString, Length } from "class-validator";

@InputType({ isAbstract: true })
@ObjectType()
export class user {
  @Field(() => Number)
  restaurant_id: number;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  @IsNumber()
  isVegan: number;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  address: string;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  ownerName: string;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  categoryName: string;
}
