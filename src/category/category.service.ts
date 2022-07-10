import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "src/typeOrm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dtos/createCategory.dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}

  createCategory(createCategoryDto: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async findCategoryById(id: number) {
    const response = await this.categoryRepository.findOne({
      where: { id: id },
    });
    if (!response) {
      throw new NotFoundException("Category not found");
    }
    return response;
  }

  findAllCategories() {
    return this.categoryRepository.find();
  }

  async updateCategoryService(id: number, updatedData: Object) {
    const existingData = await this.categoryRepository.findOne({
      where: { id: id },
    });
    if (!existingData) {
      throw new NotFoundException("Category not found");
    }

    const response = await this.categoryRepository.update(id, updatedData);

    console.log("x>>>>isting:::", response);
    return "updated category successfully";
  }
}
