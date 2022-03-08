import { Field, ObjectType } from '@nestjs/graphql'

import { Abstract } from '@enlace/models'

@ObjectType()
export class User extends Abstract {
  @Field()
  readonly email: string
}
