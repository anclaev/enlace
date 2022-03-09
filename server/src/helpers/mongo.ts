import { MongoConfig } from 'src/config'

export const getConnectionUri = (options: MongoConfig) =>
  `mongodb://${options.user}:${options.pwd}@${options.host}:${options.port}/${options.db}?authSource=admin`
