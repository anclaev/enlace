import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { AbstractDocument } from '@common/abstract.schema'

@Schema({ versionKey: false, skipVersioning: true, collection: 'users' })
export class UserDocument extends AbstractDocument {
  @Prop({ type: String, minlength: 1 })
  email: string

  @Prop({ type: String, minlength: 8 })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(UserDocument)
