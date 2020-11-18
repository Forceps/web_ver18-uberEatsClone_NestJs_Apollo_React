import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  providers: [PrismaService, UsersResolver, UsersService, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
