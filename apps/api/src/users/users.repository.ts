import { Injectable, Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { AbstractRepository } from '../database/abstract.repository'

import { UserDocument } from './models/user.schema'
import { User } from './models/user.model'

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UsersRepository.name)

  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel)
  }
}
