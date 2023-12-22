import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { FindRoomsParamsDto } from './dto/find-rooms-params.dto';
import { FindRoomsQueryDto } from './dto/find-rooms-query.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { Hotel } from './entities/hotel.entity';
import { RoomType } from './entities/room-type.entity';
import { Public } from 'src/auth/public.decorator';
import { BookRoomDto, BookRoomParamsDto } from './dto/book-room.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) { }

  @ApiOkResponse({
    type: Hotel,
    isArray: true
  })
  @Public()
  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @ApiOkResponse({
    type: RoomType,
    isArray: true
  })
  @Public()
  @Get(':id/rooms')
  findRooms(
    @Param() params: FindRoomsParamsDto,
    @Query() query: FindRoomsQueryDto,
  ) {
    return this.hotelsService.findRooms(params.id, query.from, query.to);
  }

  @Post(":id/book")
  bookRoom(
    @Param() params: BookRoomParamsDto,
    @Body() bookRoomDto: BookRoomDto,
  ) {
    return this.hotelsService.bookRoom(params.id, bookRoomDto.from, bookRoomDto.to)
  }
}
