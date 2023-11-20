import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hotel } from './schemas/hotel.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name)
    private hotelModel: mongoose.Model<Hotel>,
  ) {}
  async findAll(): Promise<Hotel[]> {
    const hotels = await this.hotelModel.find();
    return hotels;
  }
  async create(hotel: Hotel): Promise<Hotel> {
    const res = await this.hotelModel.create(hotel);
    return res;
  }
  async findById(id: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findById(id);
    if (!hotel) {
      throw new NotFoundException('Booking is not found ');
    }
    return hotel;
  }
  async updateById(id: string, hotel: Hotel): Promise<Hotel> {
    return await this.hotelModel.findByIdAndUpdate(id, hotel, {
      new: true,
      runValidator: true,
    });
  }
  async deleteById(id: string): Promise<Hotel> {
    return await this.hotelModel.findByIdAndDelete(id);
  }
}
