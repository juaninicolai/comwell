import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './schemas/hotel.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotel')
@UseGuards(AuthGuard())
export class HotelController {
  constructor(private hotelService: HotelService) { }

  @Get()
  async getAllHotels(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get(':id')
  async getHotel(
    @Param('id')
    id: string,
  ): Promise<Hotel> {
    return this.hotelService.findById(id);
  }

  @Post()
  async createHotel(
    @Body()
    hotel: CreateBookingDto,
  ): Promise<Hotel> {
    return this.hotelService.create(hotel);
  }

  @Put(':id')
  async updateHotel(
    @Param('id')
    id: string,
    @Body()
    hotel: UpdateBookingDto,
  ): Promise<Hotel> {
    return this.hotelService.updateById(id, hotel);
  }

  @Delete(':id')
  async deleteHotel(
    @Param('id')
    id: string,
  ): Promise<Hotel> {
    return this.hotelService.deleteById(id);
  }
}
