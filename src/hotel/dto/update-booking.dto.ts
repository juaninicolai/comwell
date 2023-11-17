import { Category } from "../schemas/hotel.schema";



export class UpdateBookingDto{

    readonly name: string;
    readonly description: string;
    readonly rooms: number;
    readonly price: number;
    readonly category: Category;

}