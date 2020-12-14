import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { PaymentResolver } from "./payments.resolver";
import { PaymentService } from "./payments.service";

@Module({
  providers: [PrismaService, PaymentResolver, PaymentService],
})
export class PaymentsModule {}
