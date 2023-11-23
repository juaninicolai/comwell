import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '@nestjs/passport';
import { IsBookingAvailableDto } from './dto/is-booking-available.dto';

@Controller('hotel')
@UseGuards(AuthGuard())
export class BookingController {
  constructor(private bookingService: BookingService) { }

  @Get()
  async getAllBookings(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Get(':id')
  async getBooking(
    @Param('id')
    id: string,
  ): Promise<Booking> {
    return this.bookingService.findById(id);
  }

  @Post("booking")
  async createBooking(
    @Body()
    creatingBookingDto: CreateBookingDto,
  ): Promise<Booking> {
    const booking: Booking = new Booking()
    booking.name = creatingBookingDto.name
    booking.price = creatingBookingDto.price
    booking.category = creatingBookingDto.category
    booking.from = creatingBookingDto.from
    booking.to = creatingBookingDto.to
    return this.bookingService.create(creatingBookingDto);
  }

  @Post("booking/is-available")
  async isBookingAvailable(
    @Body()
    isBookingAvailableDto: IsBookingAvailableDto,
  ): Promise<boolean> {
    return Math.random() > 0.5
  }
}
