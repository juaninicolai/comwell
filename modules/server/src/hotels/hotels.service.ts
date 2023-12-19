import { Injectable, OnModuleInit } from '@nestjs/common';
import { Hotel } from './entities/hotel.entity';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RoomType } from './entities/room-type.entity';
import { Room, RoomDocument } from './entities/room.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class HotelsService implements OnModuleInit {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    @InjectModel(RoomType.name) private roomTypeModel: Model<RoomType>,
    @InjectModel(Room.name) private roomModel: Model<Room>,
  ) {}

  findAll() {
    return this.hotelModel.find();
  }

  async findRooms(id: string, from?: Date, to?: Date) {
    const filter: FilterQuery<RoomDocument> = {
      hotel: id,
    };

    if (from !== undefined && to !== undefined) {
      filter.$or = [{ bookedFrom: { $gte: to } }, { bookedTo: { $lte: from } }];
    }

    const availableRooms = await this.roomModel.find(filter).distinct('type');
    return this.roomTypeModel.find({ _id: { $in: availableRooms } });
  }

  async onModuleInit() {
    const countOfHotels = await this.hotelModel.countDocuments();
    if (countOfHotels > 0) {
      return;
    }

    const insertedHotels = await this.hotelModel.insertMany([
      { name: 'Aarhus House', city: 'Aarhus', region: 'Jytland' },
      { name: 'Odense House', city: 'Odense', region: 'Fyn' },
      { name: 'Copenhagen House', city: 'Copenhagen', region: 'Zealand' },
    ]);

    const insertedRoomTypes = await this.roomTypeModel.insertMany([
      { name: 'standard', capacity: 2 },
      { name: 'superior', capacity: 3 },
      { name: 'suite', capacity: 5 },
    ]);

    for (const insertedHotel of insertedHotels) {
      for (const insertedRoomType of insertedRoomTypes) {
        const numberOfRooms = {
          standard: 1,
          superior: 1,
          suite: 1,
        }[insertedRoomType.name];

        const rooms = [];
        for (let i = 0; i < numberOfRooms; i++) {
          const bookedFrom = faker.date.past();
          const bookedTo = faker.date.between({
            from: bookedFrom,
            to: new Date(),
          });
          const room = new this.roomModel({
            hotel: insertedHotel,
            type: insertedRoomType,
            bookedFrom,
            bookedTo,
          });
          rooms.push(room.save());
        }
        await Promise.all(rooms);
      }
    }
  }
}
