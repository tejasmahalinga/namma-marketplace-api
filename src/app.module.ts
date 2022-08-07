import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "./products/products.module";
import { VariantsModule } from "./variants/variants.module";
import { SellersModule } from "./sellers/sellers.module";
import { CategoryModule } from "./category/category.module";
import { Category } from "./category/entities/category.entity";
import { Product } from "./products/entities/product.entity";
import { Seller } from "./sellers/entities/seller.entity";
import { Variant } from "./variants/entities/variant.entity";
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: +configService.get<number>("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_NAME"),
        entities: [Category, Product, Seller, Variant],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CategoryModule,
    ProductsModule,
    VariantsModule,
    SellersModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
