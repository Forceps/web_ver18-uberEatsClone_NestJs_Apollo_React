import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [],
  providers: [PrismaService, UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
