import { InputType, ObjectType, PartialType, PickType } from "@nestjs/graphql";
import { CoreOutput } from "src/globalLib/common/dtos/output.dto";
import { user } from "../entities/user.entity";

@InputType()
export class EditProfileInput extends PartialType(
  PickType(user, ["email", "password"])
) {}

@ObjectType()
export class EditProfileOutput extends CoreOutput {}
