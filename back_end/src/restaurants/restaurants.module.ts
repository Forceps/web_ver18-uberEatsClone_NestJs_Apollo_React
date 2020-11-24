import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { CategoryResolver, RestaurantResolver } from "./restaurants.resolver";
import { RestaurantService } from "./restaurants.service";

@Module({
  providers: [
    PrismaService,
    RestaurantResolver,
    CategoryResolver,
    RestaurantService,
  ],
})
export class RestaurantsModule {}
