import { Controller, Get, Post, Put,UsePipes,ValidationPipe,Body, Param,ParseIntPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/createCategory.dto';

@Controller('categories')
export class CategoryController {

  constructor(private readonly categoryServices:CategoryService){}

  @Get()
  getCategory() {
    return this.categoryServices.findAllCategories();
  }


  @Get('/:id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    const response=this.categoryServices.findCategoryById(id)
    return response;
  }


  @Post()
  @UsePipes(ValidationPipe)

  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const response=this.categoryServices.createCategory(createCategoryDto)
    return 'created category successfully';
  }

  @Put("/:id")
  updateCategory(@Body() updateCategoryData:string, @Param('id',ParseIntPipe) id:number) {
    const response=this.categoryServices.updateCategoryService(id,updateCategoryData)
    return response;
  }
}
