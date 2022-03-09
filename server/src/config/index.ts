import { readFileSync } from 'fs'
import { join } from 'path'

import * as yaml from 'js-yaml'
import * as joi from 'joi'

const YAML_CONFIG_FILENAME = `${process.env.MODE}.yaml`

export type MongoConfig = {
  port: number
  host: string
  db: string
  user: string
  pwd: string
}

export type JwtConfig = {
  expiration: number
  secret: string
}

export interface Config {
  app: {
    port: number
  }
  jwt: JwtConfig
  mongo: MongoConfig
}

export const configSchema = joi.object({
  app: joi.object().keys({
    port: joi.number().required().min(4),
  }),
  jwt: joi.object().keys({
    expiration: joi.number().required(),
    secret: joi.string().required(),
  }),
  mongo: joi.object().keys({
    port: joi.number().required().min(4),
    host: joi.string().required(),
    db: joi.string(),
    user: joi.string().required(),
    pwd: joi.string(),
  }),
})

export function config() {
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>
}
