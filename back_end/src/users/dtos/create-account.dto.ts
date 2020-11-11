import { InputType, ObjectType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/globalLib/common/dtos/output.dto";
import { user } from "../entities/user.entity";

@InputType()
export class CreateAccountInput extends PickType(user, [
  "email",
  "password",
  "role",
]) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {}
