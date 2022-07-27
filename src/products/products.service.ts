import {
  Injectable,
  NotFoundException,
  SerializeOptions,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryService } from "src/category/category.service";
import { Category } from "src/category/entities/category.entity";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductResponseDto } from "./dto/product-response.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private categoryService: CategoryService
  ) {}

  async create(createProductDto: CreateProductDto) {
    const categoryData = await this.categoryService.findOne(
      createProductDto.categoryId
    );
    console.log("catgeoryDATS?????>>>>>>", categoryData);

    const productData = this.productRepository.create(createProductDto);
    productData.category = categoryData;

    const response = await this.productRepository.save(productData);
    console.log("CREATED>>>> CATGEORUY IDD", createProductDto.categoryId);
    return "successfully created product";
  }

  async findAll() {
    const response = await this.productRepository.find({
      relations: { category: true },
    });
    return response;
  }
  // @SerializeOptions()
  async findOne(id: number) {
    const response = await this.productRepository.findOne({ where: { id } });
    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    // const response = this.productRepository.create(updateProductDto);
    const saving = await this.productRepository.update(id, updateProductDto);
    return `Product updated successfully`;
  }

  async remove(id: number) {
    const response = await this.productRepository.delete(id);
    return `Deleted ${id} successfully`;
  }
}
