import { Field } from "@nestjs/graphql";
import { IsNumber, IsOptional } from "class-validator";

export class CoreEntity {
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  updatedAt: Date;
}
