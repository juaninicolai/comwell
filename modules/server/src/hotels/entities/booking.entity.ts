import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Room } from './room.entity';
import { User } from 'src/users/entities/user.entity';

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Room.name })
  room: Room;

  @Prop()
  from: Date;

  @Prop()
  to: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
