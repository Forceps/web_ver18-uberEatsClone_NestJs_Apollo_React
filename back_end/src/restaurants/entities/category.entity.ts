import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsString, Length } from "class-validator";
import { CoreEntity } from "src/globalLib/common/entities/core.entity";

@InputType("CategoryInputType", { isAbstract: true })
@ObjectType()
export class restaurant extends CoreEntity {
  @Field(() => String)
  @IsString()
  @Length(2, 45)
  name: string;

  @Field(() => String)
  @IsString()
  coverImg: string;
}
