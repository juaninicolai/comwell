import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoomTypeDocument = HydratedDocument<RoomType>;

@Schema()
export class RoomType {
  @Prop()
  name: string

  @Prop()
  capacity: number
}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);
