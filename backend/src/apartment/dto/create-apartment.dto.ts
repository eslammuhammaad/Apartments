import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApartmentType } from "../schemas/apartment.schema";

export class CreateApartmentDto  {
    @IsNotEmpty()
    @IsString()
    readonly name:string; 
    @IsNotEmpty()
    @IsNumber()
    readonly price:number;
    @IsNotEmpty()
    @IsString()
    readonly description:string;
    @IsNotEmpty()
    @IsString() 
    readonly location:string; 
    @IsNotEmpty()
    @IsNumber() 
    readonly bedrooms:number; 
    @IsNotEmpty()
    @IsNumber() 
    readonly bathrooms:number; 
    @IsOptional()
    @IsString()
    readonly image: string
    @IsOptional()
    @IsEnum(ApartmentType, {message: "Please provide a valid type of apartment. Either 'sell' or 'rent'"})
    readonly type: ApartmentType;
}
