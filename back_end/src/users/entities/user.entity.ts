import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
import { IsEmail, IsEnum, IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

enum UserRole {
  client,
  owner,
  delivery,
}
export const UserRoleKind: ["client", "owner", "delivery"] = [
  "client",
  "owner",
  "delivery",
];

registerEnumType(UserRole, { name: "UserRole" });

@InputType({ isAbstract: true })
@ObjectType()
export class user extends CoreEntity {
  @Field(() => String)
  @IsEmail()
  @Length(2, 80)
  email: string;

  @Field(() => String)
  @IsString()
  @Length(2, 70)
  password: string;

  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;
}
