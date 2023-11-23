import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  SINGLEROOM = 'singleroom',
  DOUBLEROOM = 'doublerom',
  SUITE = 'suite',
  DELUXEROOM = 'deluxeroom',
}
@Schema({
  timestamps: true,
})
export class Booking {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  category: Category;

  @Prop()
  from: Date;

  @Prop()
  to: Date;
}
export const BookingSchema = SchemaFactory.createForClass(Booking);
