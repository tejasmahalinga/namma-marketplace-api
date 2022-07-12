import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const productData = this.productRepository.create(createProductDto);
    const response = await this.productRepository.save(productData);
    return "successfully created product";
  }

  async findAll() {
    const response = await this.productRepository.find();
    return response;
  }

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
