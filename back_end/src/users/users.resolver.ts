import { UseGuards } from "@nestjs/common";
import {
  Args,
  Context,
  GqlExecutionContext,
  Mutation,
  Query,
  Resolver,
} from "@nestjs/graphql";
import { AuthUser } from "src/auth/auth-user.decorator";
import { AuthGuard } from "src/auth/auth.guard";
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
  @UseGuards(AuthGuard)
  me(@AuthUser() authUser: user) {
    console.log(authUser);
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
