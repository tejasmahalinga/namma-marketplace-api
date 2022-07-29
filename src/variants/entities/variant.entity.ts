import { Product } from "src/products/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  variantQty: number;

  @Column()
  unit: string;

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;
}
