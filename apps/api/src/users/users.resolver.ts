import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { UsersService } from './users.service'
import { User } from './models/user.model'

import { CreateUserInput } from './dto/input/create-user-input.dto'
import { GetUserArgs } from './dto/args/get-user-args.dto'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserData') data: CreateUserInput) {
    return this.usersService.createUser(data)
  }

  @Query(() => User, { name: 'user' })
  async getUser(@Args() args: GetUserArgs) {
    return this.usersService.getUser(args)
  }
}
