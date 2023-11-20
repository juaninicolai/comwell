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
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  rooms: number;

  @Prop()
  price: number;

  @Prop()
  category: Category;
}
export const HotelSchema = SchemaFactory.createForClass(Hotel);
