import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthUser } from "src/auth/auth-user.decorator";
import { Role } from "src/auth/role.decorator";
import { user, UserRole } from "src/users/entities/user.entity";
import {
  CreatePaymentInput,
  CreatePaymentOutput,
} from "./dtos/create-payment.dto";
import { GetPaymentOutput } from "./dtos/get-payments.dto";
import { payment } from "./entities/payment.entity";
import { PaymentService } from "./payments.service";

@Resolver(() => payment)
export class PaymentResolver {
  constructor(private readonly PaymentService: PaymentService) {}

  @Mutation(() => CreatePaymentOutput)
  @Role([UserRole.owner])
  createPayment(
    @AuthUser() authUser: user,
    @Args("input") createPaymentInput: CreatePaymentInput
  ): Promise<CreatePaymentOutput> {
    return this.PaymentService.createPayment(authUser, createPaymentInput);
  }

  @Query(() => GetPaymentOutput)
  @Role([UserRole.owner])
  getPayment(@AuthUser() authUser: user): Promise<GetPaymentOutput> {
    return this.PaymentService.getPayments(authUser);
  }
}
