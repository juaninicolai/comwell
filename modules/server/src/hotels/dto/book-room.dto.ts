import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class BookRoomParamsDto {
  @IsString()
  id: string;
}

export class BookRoomDto {
  @IsString()
  roomType: string;

  @Type(() => Date)
  @IsDate()
  from: Date;

  @Type(() => Date)
  @IsDate()
  to: Date;
}
