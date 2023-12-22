import { Controller, Get, Param, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { FindRoomsParamsDto } from './dto/find-rooms-params.dto';
import { FindRoomsQueryDto } from './dto/find-rooms-query.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Hotel } from './entities/hotel.entity';
import { RoomType } from './entities/room-type.entity';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) { }

  @ApiOkResponse({
    type: Hotel,
    isArray: true
  })
  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @ApiOkResponse({
    type: RoomType,
    isArray: true
  })
  @Get(':id/rooms')
  findRooms(
    @Param() params: FindRoomsParamsDto,
    @Query() query: FindRoomsQueryDto,
  ) {
    return this.hotelsService.findRooms(params.id, query.from, query.to);
  }
}
