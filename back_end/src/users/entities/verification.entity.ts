import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType({ isAbstract: true })
@ObjectType()
export class Verification extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 25)
  code: string;

  @Field(() => Number)
  @IsNumber()
  userId: number;
}
