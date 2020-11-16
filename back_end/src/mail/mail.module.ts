import { DynamicModule, Global, Module } from "@nestjs/common";
import { CONFIG_OPTIONS } from "src/globalLib/common/common.constants";

@Module({})
@Global()
export class MailModule {
  static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: MailModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        JwtService,
      ],
      exports: [JwtService],
    };
  }
}
