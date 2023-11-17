import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [ 
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/hotel-booking'),
  
  HotelModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
