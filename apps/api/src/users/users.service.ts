import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'

import { UsersRepository } from './users.repository'
import { UserDocument } from './models/user.schema'
import { User } from './models/user.model'

import { GetUserArgs } from './dto/args/get-user-args.dto'
import { CreateUserInput } from './dto/input/create-user-input.dto'

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  private async validateCreateUserData(data: CreateUserInput) {
    try {
      await this.usersRepository.getOne({ email: data.email })

      throw new UnprocessableEntityException('Email already exists.')
    } catch (err) {
      return true
    }
  }

  private toModel(userDocument: UserDocument): User {
    return {
      _id: userDocument._id.toHexString(),
      email: userDocument.email,
    }
  }

  async createUser(data: CreateUserInput) {
    await this.validateCreateUserData(data)

    const userDocument = await this.usersRepository.create({
      ...data,
      password: await bcrypt.hash(data.password, 10),
    })

    return this.toModel(userDocument)
  }

  async getUser(args: GetUserArgs) {
    const userDocument = await this.usersRepository.getOne(args)

    if (!userDocument) {
      return null
    }

    return this.toModel(userDocument)
  }
}
