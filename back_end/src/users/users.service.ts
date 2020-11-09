import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<null> {
    return;
  }
}
