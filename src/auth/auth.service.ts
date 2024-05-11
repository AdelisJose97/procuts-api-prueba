import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import * as bcrypt from 'bcrypt'
import { User } from 'src/database/entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signIn(
    userName: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({ where: { userName } })
    if (!user) throw new BadRequestException()
    const isMatch = await bcrypt.compare(pass, user.password)
    if (!isMatch) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user.id, userName: user.userName }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async signUp(user: any): Promise<any> {
    const saltOrRounds = 10
    const hash = await bcrypt.hash(user.password, saltOrRounds)
    return await this.userRepository.save({
      ...user,
      password: hash,
    })
  }
}
