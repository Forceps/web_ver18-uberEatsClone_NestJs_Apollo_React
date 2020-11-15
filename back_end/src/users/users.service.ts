import { Injectable } from "@nestjs/common";
import { user } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import { CreateAccountInput } from "./dtos/create-account.dto";
import { EditProfileInput } from "./dtos/edit-profile.dto";
import { LoginInput } from "./dtos/login.dto";

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
      const ret = await this.prisma.user.create({
        data: {
          email,
          password: await hash(password, 10),
          role,
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

  async findById(id: number): Promise<user> {
    return this.prisma.user.findOne({ where: { id } });
  }

  async editProfile(
    userId: number,
    { email, password }: EditProfileInput
  ): Promise<user> {
    let updateUnit: object = {};
    if (email) {
      updateUnit = { email };
    }
    if (password) {
      updateUnit = { ...updateUnit, password: await hash(password, 10) };
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: updateUnit,
    });
  }
}
