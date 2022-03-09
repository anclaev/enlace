import { GqlExecutionContext } from '@nestjs/graphql'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { User } from '@/user/models/user.model'

export const getCurrentUserByContext = (ctx: ExecutionContext): User => {
  if (ctx.getType() === 'http') {
    return ctx.switchToHttp().getRequest().user
  }

  const gqlCtx = GqlExecutionContext.create(ctx)
  return gqlCtx.getContext().req.user
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx),
)
