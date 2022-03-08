import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { AbstractDocument } from '../../database/abstract.schema'

@Schema({
  collection: 'users',
  versionKey: false,
  id: false,
  timestamps: false,
})
export class UserDocument extends AbstractDocument {
  @Prop({ type: String, isRequired: true })
  email: string

  @Prop({ type: String, isRequired: true, minlength: 8 })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(UserDocument)
