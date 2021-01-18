import { Module } from "@nestjs/common";
import { PrismaService } from "src/globalLib/prisma.service";
import {
  CategoryResolver,
  DishResolver,
  RestaurantResolver,
} from "./restaurants.resolver";
import { RestaurantService } from "./restaurants.service";

@Module({
  providers: [
    PrismaService,
    RestaurantResolver,
    CategoryResolver,
    DishResolver,
    RestaurantService,
  ],
})
export class RestaurantsModule {}
