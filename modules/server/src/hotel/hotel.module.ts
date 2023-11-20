import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { HotelSchema } from './schemas/hotel.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
    PassportModule,
  ],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule { }
