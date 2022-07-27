import { Expose } from "class-transformer";

export class ProductResponseDto {
  @Expose()
  name: string;
  @Expose()
  description: string;
  @Expose()
  manufacturer: string;
  @Expose()
  categoryId: number;
}
