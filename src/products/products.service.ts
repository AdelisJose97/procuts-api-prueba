import { Injectable } from '@nestjs/common'
import { Product } from 'src/database/entities/product.entity'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-prodct.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find()
  }

  async create(product: CreateProductDto): Promise<Product> {
    return this.productRepository.save(product)
  }

  async update(id: string, product: UpdateProductDto): Promise<Product> {
    await this.productRepository.update({ id }, { ...product })
    return this.productRepository.findOne({ where: { id } })
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete({ id })
  }
}
