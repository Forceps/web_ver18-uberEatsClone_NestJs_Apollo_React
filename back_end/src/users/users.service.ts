import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { CreateAccountInput } from "./dtos/create-account.dto";
import { UserRoleKind } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined | null> {
    try {
      const exists = await this.prisma.user.findOne({ where: { email } });
      if (exists) {
        return "There is a user with that email already.";
      }
      const ret = this.prisma.user.create({
        data: {
          email,
          password,
          role: UserRoleKind[role],
        },
      });
      console.log((await ret).id);
    } catch (e) {
      console.log(e);
      return "Couldn't create account (at user.service.ts)";
    }
  }
}
