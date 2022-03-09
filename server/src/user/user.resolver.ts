import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'

import { GetUserArgs } from './dto/args/get-user-args.dto'
import { CreateUserInput } from './dto/input/create-user-input.dto'

import { User } from './models/user.model'
import { UserService } from './user.service'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData)
  }

  @Query(() => User, { name: 'user' })
  async getUser(@Args() getUserArgs: GetUserArgs) {
    return this.userService.getUser(getUserArgs)
  }
}
