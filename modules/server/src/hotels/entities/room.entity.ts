import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { RoomType } from './room-type.entity';
import { Hotel } from './hotel.entity';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Hotel.name })
  hotel: Hotel;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: RoomType.name })
  type: RoomType;

  @Prop({ required: false, default: null })
  bookedFrom: Date | null;

  @Prop({ required: false, default: null })
  bookedTo: Date | null;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
