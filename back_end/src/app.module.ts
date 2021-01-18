import { Module } from "@nestjs/common";
import * as Joi from "joi";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { UsersModule } from "./users/users.module";
import { JwtModule } from "./jwt/jwt.module";
import { PrismaService } from "./globalLib/prisma.service";
import { AuthModule } from "./auth/auth.module";
import { OrdersModule } from "./orders/order.module";
import { CommonModule } from "./globalLib/common/common.module";
import { PaymentsModule } from "./payments/payments.module";
import { ScheduleModule } from "@nestjs/schedule";
import { UploadsModule } from "./uploads/uploads.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test",
      ignoreEnvFile: process.env.NODE_ENV === "prod",
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid("dev", "prod", "test").required(),
        PRIVATE_KEY: Joi.string().required(),
        AWS_S3_nestUpload_AccessKey: Joi.string().required(),
        AWS_S3_nestUpload_SecretKey: Joi.string().required(),
        AWS_S3_nestUpload_BucketName: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, connection }) => {
        return {
          token: req ? req.headers["x-jwt"] : connection.context["x-jwt"],
        };
      },
      installSubscriptionHandlers: true,
    }),
    JwtModule.forRoot({
      privateKey: process.env.PRIVATE_KEY,
    }),
    ScheduleModule.forRoot(),
    RestaurantsModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    CommonModule,
    PaymentsModule,
    UploadsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
