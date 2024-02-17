import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Apartment } from './schemas/apartment.schema';

@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post()
  async create(@Body() apartment: CreateApartmentDto) {
    return await this.apartmentService.create(apartment);
  }

  @Get()
  async findAll() : Promise<Apartment[]> {
    return await this.apartmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Apartment> {
    return await this.apartmentService.findOneById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string):Promise<string> {
    return await this.apartmentService.DeleteById(id);
  }
}
