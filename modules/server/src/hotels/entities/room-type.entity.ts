import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type RoomTypeDocument = HydratedDocument<RoomType>;

@Schema()
export class RoomType {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  capacity: number;
}

export const RoomTypeSchema = SchemaFactory.createForClass(RoomType);
