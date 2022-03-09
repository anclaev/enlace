import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common'
import { Response } from 'express'

import { AuthService } from './auth.service'

import { User } from '@/user/models/user.model'

import LocalAuthGuard from './guards/local-auth.guard'
import JwtAuthGuard from './guards/jwt-auth.guard'

import { CurrentUser } from './current-user.decorator'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.login(user, res)

    res.send(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  isAuthenticated() {
    return true
  }
}
