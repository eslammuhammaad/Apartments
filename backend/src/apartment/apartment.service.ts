import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Apartment } from './schemas/apartment.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment.name)
    private apartmentModel: Model<Apartment>
  ) {}
 
  async findAll(): Promise<Apartment[]> {
    const apartment =await this.apartmentModel.find();
    return apartment;
  }

  async create(apartment:CreateApartmentDto): Promise<Apartment> {
    const newApartment = await this.apartmentModel.create(apartment);
    return newApartment;
  }


  async findOneById(id: string) : Promise<Apartment> {
     const validId = mongoose.isValidObjectId(id);
     if(!validId) throw new BadRequestException('Invalid id');
     const apartment = await this.apartmentModel.findById(id);
     if(!apartment) throw new NotFoundException('Apartment not found');
     return apartment;
  }

  async DeleteById(id: string) : Promise<string>{
    const validId = mongoose.isValidObjectId(id);
      if(!validId) throw new BadRequestException('Invalid id');
    const apartment = await this.apartmentModel.findByIdAndDelete(id);
    if(!apartment) throw new NotFoundException('Apartment not found');

    return "Apartment deleted successfully";
  }
}
