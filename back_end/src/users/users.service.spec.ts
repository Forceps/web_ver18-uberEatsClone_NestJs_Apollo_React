import { Test } from "@nestjs/testing";
import { PrismaService } from "src/globalLib/prisma.service";
import { JwtService } from "src/jwt/jwt.service";
import { UsersService } from "./users.service";

describe("UserService", () => {
  let service: UsersService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        PrismaService,
        JwtService,
        {
          provide: get,
        },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
  it.todo("createAccount");
  it.todo("login");
  it.todo("findById");
  it.todo("editProfile");
  it.todo("verifyEmail");
});
