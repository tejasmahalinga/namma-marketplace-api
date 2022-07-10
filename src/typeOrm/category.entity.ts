import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  parent_id: number;
}
