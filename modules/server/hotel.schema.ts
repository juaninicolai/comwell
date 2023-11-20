import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    SINGLEROOM = "singleroom",
    DOUBLEROOM = "doublerom",
    SUITE = "suite",
    DELUXEROOM = "deluxeroom" 
}@Schema({
 timestamps : true

})
export class Hotel{
    @Prop()
    name: String;
    
    @Prop()
    description: String;
    
    @Prop()
    rooms: Number;

    @Prop()
    price: Number;
    
    @Prop()
    category : Category
}
export const HotelSchema = SchemaFactory.createForClass(Hotel)
