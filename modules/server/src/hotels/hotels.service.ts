import { Injectable } from '@nestjs/common';
import { Hotel } from './entities/hotel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class HotelsService {
  constructor(@InjectModel(Hotel.name) private hotelModel: Model<Hotel>) { }

  findAll() {
    return this.hotelModel.find()
  }
}
