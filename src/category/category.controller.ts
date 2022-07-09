import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get()
  getCategory() {
    return 'category is working';
  }
  @Get('/:id')
  getCategoryById() {
    return 'getCategoryById';
  }
  @Post()
  createCategory() {
    return 'post catgeuory';
  }

  @Put()
  updateCategory() {
    return 'updateCategory';
  }
}
