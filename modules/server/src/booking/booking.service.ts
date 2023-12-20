import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schemas/booking.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name)
    private bookingModel: mongoose.Model<Booking>,
  ) {}

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find();
  }
  async create(booking: Booking): Promise<Booking> {
    return await this.bookingModel.create(booking);
  }
  async findById(id: string): Promise<Booking> {
    const booking = await this.bookingModel.findById(id);
    if (!booking) {
      throw new NotFoundException('Booking is not found ');
    }
    return booking;
  }
  async updateById(id: string, booking: Booking): Promise<Booking> {
    return this.bookingModel.findByIdAndUpdate(id, booking, {
      new: true,
      runValidator: true,
    });
  }
  async deleteById(id: string): Promise<Booking> {
    return this.bookingModel.findByIdAndDelete(id);
  }

  async isBookingAvailable(
    name: string,
    from: Date,
    to: Date,
  ): Promise<boolean> {
    const booking = this.bookingModel.findOne({
      name,
      $or: [
        { $and: [{ from: { $gte: from } }, { from: { $lt: to } }] },
        { $and: [{ to: { $gt: from } }, { to: { $lte: to } }] },
        { $and: [{ from: { $lte: from } }, { to: { $gte: to } }] },
      ],
    });
    return !booking;
  }
}
