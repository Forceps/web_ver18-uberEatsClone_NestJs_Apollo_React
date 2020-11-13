import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import { CreateAccountInput } from "./dtos/create-account.dto";
import { LoginInput } from "./dtos/login.dto";
import { UserRoleKind } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.prisma.user.findOne({ where: { email } });
      if (exists) {
        return { ok: false, error: "There is a user with that email already." };
      }
      const hashedPW = await hash(password, 10);
      const ret = await this.prisma.user.create({
        data: {
          email,
          password: hashedPW,
          role: UserRoleKind[role],
        },
      });
      console.log(ret.id);
      return { ok: true };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
        error: "Couldn't create account (at user.service.ts)",
      };
    }
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.prisma.user.findOne({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error: "User not found",
        };
      }
      const PW_ok = await compare(password, user.password);
      if (!PW_ok) {
        return {
          ok: false,
          error: "Wrong password",
        };
      }
      const token = this.jwtService.sign({ id: user.id });
      return {
        ok: true,
        token,
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
