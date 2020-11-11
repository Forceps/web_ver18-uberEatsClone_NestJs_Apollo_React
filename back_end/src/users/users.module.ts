import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";

@Module({
  imports: [JwtService],
  providers: [PrismaService, UsersResolver, UsersService],
})
export class UsersModule {}
