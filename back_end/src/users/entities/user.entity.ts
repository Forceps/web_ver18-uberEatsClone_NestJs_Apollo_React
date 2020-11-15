import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsEnum, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

enum UserRole {
  client = "client",
  owner = "owner",
  delivery = "delivery",
}

registerEnumType(UserRole, { name: "UserRole" });

@InputType({ isAbstract: true })
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
}
