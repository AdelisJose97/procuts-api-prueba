import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class registerUserDto {
  @ApiProperty({ example: 'user' })
  @IsNotEmpty()
  @IsString()
  userName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  email: string
}
