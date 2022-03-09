import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { Request } from 'express'

import { UserService } from '@/user/user.service'

import { TokenPayload } from '@/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req.cookies.Authentication,
      ]),
      secretOrKey: config.get<string>('jwt.secret'),
    })
  }

  async validate({ userId }: TokenPayload) {
    return this.userService.getUser({ _id: userId })
  }
}
