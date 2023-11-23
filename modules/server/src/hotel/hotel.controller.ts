import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './hotel.service';
import { Booking } from './schemas/hotel.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotel')
@UseGuards(AuthGuard())
export class BookingController {
  constructor(private hotelService: BookingService) { }

  @Get()
  async getAllHotels(): Promise<Booking[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async getHotel(
    @Param('id')
    id: string,
  ): Promise<Booking> {
    return this.hotelService.findById(id);
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
    return this.hotelService.create(creatingBookingDto);
  }
}
