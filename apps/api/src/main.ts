import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const bootstrap = async () => {
  const port = process.env.PORT || 3333;
  const prefix = 'api';

  const app: INestApplication = (
    await NestFactory.create(AppModule)
  ).setGlobalPrefix(prefix);

  app
    .listen(port)
    .finally(() =>
      Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${prefix}`
      )
    );
};

bootstrap();
