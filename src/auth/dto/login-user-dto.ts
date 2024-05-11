import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class loginUserDto {
  @ApiProperty({ example: 'user' })
  @IsNotEmpty()
  @IsString()
  userName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string
}
