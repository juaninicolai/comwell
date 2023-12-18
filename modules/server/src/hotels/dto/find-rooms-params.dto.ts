import { IsString } from 'class-validator';

export class FindRoomsParamsDto {
  @IsString()
  id: string;
}
