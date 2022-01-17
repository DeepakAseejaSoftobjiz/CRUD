import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';


@Module({
  imports: [
    CarModule,
    MongooseModule.forRoot('mongodb+srv://DeepakAseeja1999:Deepak123@cluster0.3zlky.mongodb.net/CarsDB?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }