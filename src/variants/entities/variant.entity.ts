import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  variant_qty: number;

  @Column()
  unit: string;

  @Column()
  product_id: number;
}
