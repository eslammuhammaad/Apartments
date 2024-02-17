import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

const defImage:string="https://media.istockphoto.com/id/1440568749/photo/modern-apartment-buildings-in-the-evening.jpg?s=612x612&w=0&k=20&c=CvNel8kXDnmzZu4M-L1pQBEJ5q3IDMHkfUiDB-Sh6JQ="

export enum ApartmentType {
    Sell = "sell",
    Rent = "rent",
}

@Schema({timestamps: true})
export class Apartment {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    location: string;

    @Prop({required: true})
    bedrooms: number;

    @Prop({required: true})
    bathrooms: number;
    
    @Prop({default: defImage})
    image: string;

    @Prop({required: true, enum: ApartmentType, default: ApartmentType.Sell})
    type: ApartmentType;

}

export const ApartmentSchema = SchemaFactory.createForClass(Apartment);