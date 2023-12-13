import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument} from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  hashedPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.toJSON = function () {
  const object = this.toObject();
  delete object.hashedPassword;
  return object;
};
