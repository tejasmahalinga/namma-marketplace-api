import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parentId: number;

  @Column()
  isActive: boolean;

  @Column()
  createdOn: string;

  @Column()
  modifiedOn: string;
}
