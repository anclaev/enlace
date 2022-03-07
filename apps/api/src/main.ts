import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

import { AppModule } from './app/app.module'

const bootstrap = async () => {
  const port = process.env.PORT || 3333
  const prefix = 'api'

  const app = (await NestFactory.create(AppModule)).setGlobalPrefix(prefix)

  await app
    .listen(port)
    .finally(() =>
      Logger.log(`Enlace API is running on localhost:${port}/${prefix}...`)
    )
}

bootstrap()
