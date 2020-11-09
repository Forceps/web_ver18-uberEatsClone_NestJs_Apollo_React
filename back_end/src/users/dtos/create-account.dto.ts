import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { user } from "../entities/user.entity";

@InputType()
export class CreateAccountInput extends PickType(user, [
  "email",
  "password",
  "role",
]) {}

@ObjectType()
export class CreateAccountOutput {
  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => Boolean)
  ok: boolean;
}
