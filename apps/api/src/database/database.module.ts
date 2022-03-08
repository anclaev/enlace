import { MongooseModule } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { ENV } from '../env'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>(ENV.MONGO_URI),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
