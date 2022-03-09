import { getConnectionUri } from '@helpers/mongo'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { MongoConfig } from 'src/config'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        uri: getConnectionUri(config.get<MongoConfig>('mongo')),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
