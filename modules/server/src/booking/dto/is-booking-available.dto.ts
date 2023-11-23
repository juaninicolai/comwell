import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class IsBookingAvailableDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsDate()
  readonly from: Date;
  @IsNotEmpty()
  @IsDate()
  readonly to: Date;
}
