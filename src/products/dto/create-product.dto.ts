import { MinLength } from "class-validator";

export class CreateProductDto {
  @MinLength(3)
  name: string;

  description: string;

  manufacturer: string;

  category_id: number;
}
