import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import { RestaurantResolver } from "./restaurants.resolver";
import { RestaurantService } from "./restaurants.service";

@Module({
  providers: [PrismaService, RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
