import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  parentId: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  createdOn: string;

  @Column({ nullable: true })
  modifiedOn: string;
}
