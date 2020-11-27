import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsNumber, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";
import { user } from "./user.entity";

@InputType("VerificationInputType", { isAbstract: true })
@ObjectType()
export class verification extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 25)
  code: string;

  @Field(() => Int)
  @IsNumber()
  userId: number;

  @Field(() => user, { nullable: true })
  user?: user;
}
