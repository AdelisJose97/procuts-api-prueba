import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateProductDto {
  @ApiProperty({ example: 'cola-glitter-23-grs' })
  @IsNotEmpty()
  @IsString()
  handle: string

  @ApiProperty({ example: 'COLA GLITTER 23 GRS' })
  @IsNotEmpty()
  @IsString()
  title: string

  @ApiProperty({
    example:
      'Para hacer pegaduras, contornos, decorar y pintar sobre papel, papel cartón y cartulina.',
  })
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty({ example: 60870131001 })
  @IsNotEmpty()
  @IsNumber()
  sku: number

  @ApiProperty({ example: 100.0 })
  @IsNotEmpty()
  @IsNumber()
  grams: number

  @ApiProperty({ example: 1013 })
  @IsNotEmpty()
  @IsNumber()
  stock: number

  @ApiProperty({ example: 1161 })
  @IsNotEmpty()
  @IsNumber()
  price: number

  @ApiProperty({ example: 1290 })
  @IsNotEmpty()
  @IsNumber()
  comparePrice: number

  @ApiProperty({ example: 7891153003689 })
  @IsNotEmpty()
  @IsNumber()
  barCode: number
}
