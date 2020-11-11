import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";
import { MutationOutput } from "src/globalLib/common/dtos/output.dto";
import { user } from "../entities/user.entity";

@InputType()
export class LoginInput extends PickType(user, ["email", "password"]) {}

@ObjectType()
export class LoginOutput extends MutationOutput {
  @Field(() => String, { nullable: true })
  token?: string;
}
