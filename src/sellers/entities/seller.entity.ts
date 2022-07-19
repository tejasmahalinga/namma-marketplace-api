import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  seller_name: string;

  @Column()
  // @IsNull(true)/
  email_id: string;

  @Column()
  phone_number: number;

  @Column()
  selling_product_category: string;
}
