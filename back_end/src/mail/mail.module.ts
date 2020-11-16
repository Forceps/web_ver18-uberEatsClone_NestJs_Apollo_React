import { DynamicModule, Global, Module } from "@nestjs/common";

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
