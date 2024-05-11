import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateProductDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  handle: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  title: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sku: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  grams: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  stock: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  price: number

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  comparePrice: number

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  barCode: number
}
