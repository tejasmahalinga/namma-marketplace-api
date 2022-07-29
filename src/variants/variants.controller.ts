import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { VariantsService } from "./variants.service";
import { CreateVariantDto } from "./dto/create-variant.dto";
import { UpdateVariantDto } from "./dto/update-variant.dto";

@Controller("/products/:productId/variants")
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Post()
  create(
    @Body() createVariantDto: CreateVariantDto,
    @Param("productId") productId: string
  ) {
    return this.variantsService.create(createVariantDto, +productId);
  }

  @Get()
  findAll(@Param("productId") productId: string) {
    console.log("productId in variants s>>>", productId);
    return this.variantsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.variantsService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateVariantDto: UpdateVariantDto) {
    return this.variantsService.update(+id, updateVariantDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.variantsService.remove(+id);
  }
}
