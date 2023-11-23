import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingController } from './hotel.controller';
import { BookingService } from './hotel.service';
import { BookingSchema } from './schemas/hotel.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }]),
    AuthModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule { }
