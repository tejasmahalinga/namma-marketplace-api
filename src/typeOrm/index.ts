import { Product } from "src/products/entities/product.entity";
import { Variant } from "src/variants/entities/variant.entity";
import { CategoryEntity } from "./category.entity";

const entities = [CategoryEntity, Product, Variant];

export { CategoryEntity, Product, Variant };
export default entities;
