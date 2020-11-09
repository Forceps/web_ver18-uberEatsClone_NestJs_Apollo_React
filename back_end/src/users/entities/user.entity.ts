import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType({ isAbstract: true })
@ObjectType()
export class user extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 80)
  email: string;

  @Field(() => String)
  @IsString()
  @Length(2, 20)
  password: string;

  @Field(() => String)
  @IsString()
  @Length(2, 15)
  role: UserRole;
}

type UserRole = "client" | "owner" | "delivery";
