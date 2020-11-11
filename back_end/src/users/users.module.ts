import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/globalLib/prisma.service";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [ConfigService],
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}
