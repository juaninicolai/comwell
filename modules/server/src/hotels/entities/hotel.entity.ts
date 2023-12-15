import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Room } from './room.entity';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  region: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Room.name }] })
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
