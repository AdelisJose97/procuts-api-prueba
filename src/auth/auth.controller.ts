import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { loginUserDto } from './dto/login-user-dto'
import { registerUserDto } from './dto/register-user-dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  async signIn(@Body() signInDto: loginUserDto) {
    return await this.authService.signIn(signInDto.userName, signInDto.password)
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Register an user' })
  @Post('register')
  async signUp(@Body() signInDto: registerUserDto) {
    return await this.authService.signUp(signInDto)
  }
}
