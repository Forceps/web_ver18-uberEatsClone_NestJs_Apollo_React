import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  CreateAccountInput,
  CreateAccountOutput,
} from "./dtos/create-account.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
import { user } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Resolver(() => user)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => user)
  me(@Context() context) {
    console.log(context);
    return true;
  }

  @Mutation(() => CreateAccountOutput)
  async createAccount(
    @Args("input") createAccountInput: CreateAccountInput
  ): Promise<CreateAccountOutput> {
    try {
      return this.usersService.createAccount(createAccountInput);
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  @Mutation(() => LoginOutput)
  async login(@Args("input") loginInput: LoginInput): Promise<LoginOutput> {
    try {
      return this.usersService.login(loginInput);
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
