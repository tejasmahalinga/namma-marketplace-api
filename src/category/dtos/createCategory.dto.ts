import { MinLength, IsNotEmpty } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  parent_id: number;
}
