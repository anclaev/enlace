import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common'

import * as bcrypt from 'bcrypt'

import { GetUserArgs } from './dto/args/get-user-args.dto'
import { CreateUserInput } from './dto/input/create-user-input.dto'

import { User } from './models/user.model'
import { UserDocument } from './models/user.schema'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private async validateCreateUserData({ email }: CreateUserInput) {
    try {
      await this.userRepository.findOne({ email })

      throw new UnprocessableEntityException('Email already exists.')
    } catch (err) {}
  }

  private toModel(userDocument: UserDocument): User {
    return {
      _id: userDocument._id.toHexString(),
      email: userDocument.email,
    }
  }

  async createUser(createUserData: CreateUserInput): Promise<User> {
    await this.validateCreateUserData(createUserData)

    const userDocument = await this.userRepository.create({
      ...createUserData,
      password: await bcrypt.hash(createUserData.password, 10),
    })

    return this.toModel(userDocument)
  }

  async getUser(getUserArgs: GetUserArgs): Promise<User> {
    const userDocument = await this.userRepository.findOne(getUserArgs)

    return this.toModel(userDocument)
  }

  async validateUser(email: string, password: string): Promise<User> {
    const userDocument = await this.userRepository.findOne({ email })
    const passwordIsValid = await bcrypt.compare(
      password,
      userDocument.password,
    )

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.')
    }

    return this.toModel(userDocument)
  }
}
