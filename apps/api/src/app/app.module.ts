import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { DatabaseModule } from '../database/database.module'
import { UsersModule } from '../users/users.module'

import { configSchema } from '../utils/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configSchema,
      envFilePath: '.env.local',
    }),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: process.env.NODE_ENV !== 'production',
      useGlobalPrefix: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
