import { Field } from "@nestjs/graphql";
import { IsNumber } from "class-validator";

export class CoreEntity {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
