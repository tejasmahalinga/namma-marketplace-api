import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoryModule } from "./category/category.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from './products/products.module';
import entities from "./typeOrm";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: "127.0.0.1",
        port: +configService.get<number>("DB_PORT"),
        username: "tejasmahalinga",
        password: "karizmaZMR1!",
        database: "namma_marketplace",
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CategoryModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
