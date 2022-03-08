import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'

import { ENV } from './env'

const bootstrap = async () => {
  const app = (await NestFactory.create(AppModule)).useGlobalPipes(
    new ValidationPipe()
  )
  const config = app.get(ConfigService)

  const prefix = config.get<string>(ENV.PREFIX)
  const port = config.get<number>(ENV.PORT) || 3333

  if (prefix) app.setGlobalPrefix(prefix)

  await app
    .listen(port)
    .finally(() =>
      Logger.log(`Enlace API is running on localhost:${port}/${prefix}...`)
    )
}

bootstrap()
