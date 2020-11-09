import { Mutation, Query, Resolver } from "@nestjs/graphql";
import { user } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver(() => user)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => Boolean)
  hi() {
    return true;
  }

  @Mutation(()=>Boolean)
  createAccount(@Args)
}
