import { Controller, Get, Param, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { FindRoomsParamsDto } from './dto/find-rooms-params.dto';
import { FindRoomsQueryDto } from './dto/find-rooms-query.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) { }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @Get(':id/rooms')
  findRooms(@Param() params: FindRoomsParamsDto, @Query() query: FindRoomsQueryDto) {
    return this.hotelsService.findRooms(params.id, query.from, query.to);
  }
}
