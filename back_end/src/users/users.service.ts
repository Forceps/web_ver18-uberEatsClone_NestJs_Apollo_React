import { Injectable } from "@nestjs/common";
import { user } from "@prisma/client";
import { compare, hash } from "bcrypt";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import {
  CreateAccountInput,
  CreateAccountOutput,
} from "./dtos/create-account.dto";
import { EditProfileInput, EditProfileOutput } from "./dtos/edit-profile.dto";
import { LoginInput, LoginOutput } from "./dtos/login.dto";
import { UserProfileOutput } from "./dtos/user-profile.dto";
import { VerifyEmailOutput } from "./dtos/verify-email.dto";

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
  }: CreateAccountInput): Promise<CreateAccountOutput> {
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
        select: {
          id: true,
        },
      });
      await this.prisma.verification.create({
        data: {
          code: Math.random().toString(36).substring(2),
          user: {
            connect: { id: ret.id },
          },
        },
      });
      return { ok: true };
    } catch (e) {
      console.log(e);
      return {
        ok: false,
        error: "Couldn't create account (at user.service.ts)",
      };
    }
  }

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
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

  async findById(id: number): Promise<UserProfileOutput> {
    try {
      const user = await this.prisma.user.findOne({ where: { id } });
      if (!user) {
        return {
          ok: false,
          error: "user not found",
        };
      }
      return { ok: true, user };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async editProfile(
    userId: number,
    { email, password }: EditProfileInput
  ): Promise<EditProfileOutput> {
    try {
      let updateUnit: object = {};
      if (email) {
        updateUnit = { email, verified: 0 };
        await this.prisma.verification.create({
          data: {
            code: Math.random().toString(36).substring(2),
            user: { connect: { id: userId } },
          },
        });
      }
      if (password) {
        updateUnit = { ...updateUnit, password: await hash(password, 10) };
      }
      await this.prisma.user.update({
        where: { id: userId },
        data: updateUnit,
      });
      return { ok: true };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async verifyEmail(
    userId: number,
    receivedCode: string
  ): Promise<VerifyEmailOutput> {
    try {
      const { code, id } = await this.prisma.verification.findOne({
        where: { userId },
      });
      if (receivedCode === code) {
        await this.prisma.user.update({
          where: { id: userId },
          data: { verified: 1 },
        });
        this.prisma.verification.delete({
          where: { id },
        });
        return { ok: true };
      }
      return {
        ok: false,
        error: "Code does not match",
      };
    } catch (e) {
      return { ok: false, error: e };
    }
  }
}
