import { GqlExecutionContext } from '@nestjs/graphql'
import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(ctx: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(ctx)
    return gqlCtx.getContext().req
  }
}
