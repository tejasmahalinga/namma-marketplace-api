import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSellerDto } from "./dto/create-seller.dto";
import { UpdateSellerDto } from "./dto/update-seller.dto";
import { Seller } from "./entities/seller.entity";

@Injectable()
export class SellersService {
  constructor(
    @InjectRepository(Seller)
    private readonly sellerRepository: Repository<Seller>
  ) {}

  async create(createSellerDto: CreateSellerDto) {
    const sellerData = this.sellerRepository.create(createSellerDto);
    const response = await this.sellerRepository.save(sellerData);

    return "successfully created seller";
  }

  async findAll() {
    const response = await this.sellerRepository.find();
    return response;
  }

  async findOne(id: number) {
    const response = await this.sellerRepository.find({ where: { id: id } });
    return response;
  }

  async update(id: number, updateSellerDto: UpdateSellerDto) {
    const response = await this.sellerRepository.update(id, updateSellerDto);
    return `Seller updated successfully`;
  }

  remove(id: number) {
    return `This action removes a #${id} seller`;
  }
}
