import { Apartment } from "@/app/page";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function ApartmentCard(apartment: Apartment) {
  return (
    <div className="bg-gray-900 shadow-md  hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <img
        src={apartment.image}
        alt="Property Cover"
        className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
      />

      <div className="flex flex-col p-3 gap-2 w-full">
        <p className="text-lg font-semibold truncate text-white">
          {apartment.name}
        </p>
        <div className="flex gap-1 items-center">
          <MdLocationOn className="text-slate-700 w-4 h-4" />
          <p className="text-xs text-slate-600 font-semibold truncate w-full">
            {apartment.location}
          </p>
        </div>
        <p className="text-green-700 mt-2 font-semibold ">
          ${apartment.price}
          {apartment.type === "rent" && " / month"}
        </p>
        <div className="text-slate-700 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <IoBed className="text-lg" />
            {apartment.bedrooms > 1
              ? `${apartment.bedrooms} bedrooms `
              : `${apartment.bedrooms} bedroom `}
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <FaBath className="text-lg" />
            {apartment.bathrooms > 1
              ? `${apartment.bathrooms} bathrooms `
              : `${apartment.bathrooms} bathroom `}
          </div>
        </div>
      </div>
    </div>
  );
}
