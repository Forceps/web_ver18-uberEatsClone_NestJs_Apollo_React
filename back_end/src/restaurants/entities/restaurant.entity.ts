import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType("RestaurantInputType", { isAbstract: true })
@ObjectType()
export class restaurant extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  coverImg: string;

  @Field(() => String)
  @IsString()
  @Length(2, 45)
  address: string;

  @Field(() => Number)
  @IsNumber()
  category: number;

  @Field(() => Number)
  @IsNumber()
  owner: number;
}
