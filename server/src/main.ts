import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())
  app.use(cookieParser())

  app.enableCors()

  const config = app.get(ConfigService)
  const port = config.get<string>('app.port') ?? 3001

  await app
    .listen(port)
    .finally(() =>
      Logger.log(
        `Enlace API Successfully launched on port ${port}...`,
        'Enlace',
      ),
    )
}

bootstrap()
