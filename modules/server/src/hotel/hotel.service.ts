import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schemas/hotel.schema';
import { BookingSchema } from './schemas/hotel.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private bookingModel: mongoose.Model<Booking>,
  ) { }

  async findAll(): Promise<Booking[]> {
    const hotels = await this.bookingModel.find();
    return hotels;
  }
  async create(booking: Booking): Promise<Booking> {
    const res = await this.bookingModel.create(booking);
    return res;
  }
  async findById(id: string): Promise<Booking> {
    const hotel = await this.bookingModel.findById(id);
    if (!hotel) {
      throw new NotFoundException('Booking is not found ');
    }
    return hotel;
  }
  async updateById(id: string, hotel: Booking): Promise<Booking> {
    return await this.bookingModel.findByIdAndUpdate(id, hotel, {
      new: true,
      runValidator: true,
    });
  }
  async deleteById(id: string): Promise<Booking> {
    return await this.bookingModel.findByIdAndDelete(id);
  }
}
