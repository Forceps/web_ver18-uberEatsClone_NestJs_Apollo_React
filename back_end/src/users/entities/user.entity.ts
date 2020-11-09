import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "@nestjs/graphql";
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

  @Field(() => UserRole)
  role: UserRole;
}

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
