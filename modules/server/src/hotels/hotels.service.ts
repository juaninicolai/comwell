import { Injectable, OnModuleInit } from '@nestjs/common';
import { Hotel } from './entities/hotel.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RoomType } from './entities/room-type.entity';
import { Room } from './entities/room.entity';

@Injectable()
export class HotelsService implements OnModuleInit {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<Hotel>,
    @InjectModel(RoomType.name) private roomTypeModel: Model<RoomType>,
    @InjectModel(Room.name) private roomModel: Model<Room>,
  ) { }

  findAll() {
    return this.hotelModel.find();
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
          standard: 50,
          superior: 25,
          suite: 10,
        }[insertedRoomType.name];

        const rooms = [];
        for (let i = 0; i < numberOfRooms; i++) {
          const room = new this.roomModel({
            hotel: insertedHotel,
            type: insertedRoomType,
          });
          rooms.push(room.save());
        }
        await Promise.all(rooms);
      }
      // TODO: Build /hotels/:id/rooms?from=&to= -> [{type: "standard", capacity: 1}]
    }
  }
}
