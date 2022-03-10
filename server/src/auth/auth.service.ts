import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Response } from 'express'

import { User } from '@/user/models/user.model'
import { TokenPayload } from '@common'

@Injectable()
export class AuthService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, res: Response) {
    const tokenPayload: TokenPayload = {
      userId: user._id,
    }

    const expires = new Date()
    expires.setSeconds(
      expires.getSeconds() + this.config.get<number>('jwt.expiration'),
    )

    const token = this.jwtService.sign(tokenPayload)

    res.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    })
  }

  logout(res: Response) {
    res.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    })
  }
}
