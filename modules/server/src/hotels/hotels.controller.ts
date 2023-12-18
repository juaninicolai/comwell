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

  //In addition to validating request bodies, the ValidationPipe can be used with other request object properties as well.
  // Imagine that we would like to accept :id in the endpoint path.
  // To ensure that only numbers are accepted for this request parameter, we can use the following construct:
  //@Get(':id')
  // findOne(@Param() params: FindOneParams) {
  //   return 'This action returns a user';
  // }
}
