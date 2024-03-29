import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsService } from "src/products/products.service";
import { Repository } from "typeorm";
import { CreateVariantDto } from "./dto/create-variant.dto";
import { UpdateVariantDto } from "./dto/update-variant.dto";
import { Variant } from "./entities/variant.entity";

@Injectable()
export class VariantsService {
  constructor(
    @InjectRepository(Variant)
    private readonly variantRepository: Repository<Variant>,
    private productsService: ProductsService
  ) {}

  async create(createVariantDto: CreateVariantDto, productId: number) {
    const productDetails = await this.productsService.findOne(productId);
    if (!productDetails) {
      throw new NotFoundException("Product Not found with this productId");
    }
    const variantModel = this.variantRepository.create(createVariantDto);
    variantModel.product = productDetails;
    const response = await this.variantRepository.save(variantModel);
    return `Variant successfully added : ${JSON.stringify(response)}`;
  }

  async findAll() {
    const response = await this.variantRepository.find({
      relations: { product: true },
    });
    return response;
  }

  async findOne(id: number) {
    const response = await this.variantRepository.findOne({ where: { id } });
    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async update(id: number, updateVariantDto: UpdateVariantDto) {
    const response = await this.variantRepository.update(id, updateVariantDto);
    return response;
  }

  async remove(id: number) {
    const response = await this.variantRepository.delete(id);
    return `deleted successfully`;
  }
}
