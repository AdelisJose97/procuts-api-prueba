import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from 'src/auth/auth.guard'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-prodct.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get all products' })
  @Get('/')
  getAll() {
    return this.productsService.findAll()
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a product' })
  @Post('/')
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update a product' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto)
  }

  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Delete a product' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productsService.delete(id)
  }
}
