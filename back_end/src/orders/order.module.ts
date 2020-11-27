import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { OrderResolver } from "./order.resolver";
import { OrderService } from "./order.service";

@Module({
  providers: [PrismaService, OrderResolver, OrderService],
})
export class OrdersModule {}
