import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ApartmentSchema } from './schemas/apartment.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'Apartment', schema: ApartmentSchema }])],
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
