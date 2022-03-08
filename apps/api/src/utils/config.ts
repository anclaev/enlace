import * as Joi from 'joi'

export const configSchema = Joi.object({
  MONGO_URI: Joi.string().required(),
  PORT: Joi.number().required(),
  PREFIX: Joi.string().optional(),
})
