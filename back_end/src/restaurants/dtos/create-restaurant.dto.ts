import { Field, ArgsType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  @Length(2, 40)
  name: string;

  @Field(() => Number)
  @IsNumber()
  isVegan: number;

  @Field(() => String)
  @IsString()
  address: string;

  @Field(() => String)
  @IsString()
  @Length(2, 40)
  ownerName: string;

  @Field(() => String)
  @IsString()
  categoryName: string;
}
