import { Injectable, OnModuleInit } from '@nestjs/common';
import { Hotel } from './entities/hotel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HotelsService implements OnModuleInit {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) { }

  findAll() {
    return this.hotelModel.find();
  }

  async onModuleInit() {
    const countOfHotels = await this.hotelModel.countDocuments();
    if (countOfHotels > 0) {
      return;
    }

    await this.hotelModel.insertMany([
      { city: 'Aalborg' },
      { city: 'Aarhus' },
      { city: 'Copenhagen' },
    ]);
  }
}
