import { Category } from '../schemas/booking.schema';

export class CreateBookingDto {
  readonly name: string;
  readonly price: number;
  readonly from: Date;
  readonly to: Date;
  readonly category: Category;
}
