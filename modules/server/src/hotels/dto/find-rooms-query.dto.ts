import { Type } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';

export class FindRoomsQueryDto {
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  from?: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  to?: Date;
}
