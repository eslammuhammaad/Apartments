import { Module } from '@nestjs/common';
import { ApartmentModule } from './apartment/apartment.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ApartmentModule,
  ],
})
export class AppModule {}