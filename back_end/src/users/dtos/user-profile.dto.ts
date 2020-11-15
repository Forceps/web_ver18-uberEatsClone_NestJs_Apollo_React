import { ArgsType, Field, ObjectType } from "@nestjs/graphql";
import { user } from "@prisma/client";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import * as userEt from "../entities/user.entity";

@ArgsType()
export class UserProfileInput {
  @Field(() => Number)
  userId: number;
}

@ObjectType()
export class UserProfileOutput extends CoreOutput {
  @Field(() => userEt.user, { nullable: true })
  user?: user;
}
