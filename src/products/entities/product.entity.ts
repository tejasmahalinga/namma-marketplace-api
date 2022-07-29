import { Category } from "src/category/entities/category.entity";
import { Variant } from "src/variants/entities/variant.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  manufacturer: string;

  @ManyToOne(() => Category, (category: Category) => category.products)
  category: Category;

  @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant[];
}
