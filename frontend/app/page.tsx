import DynamicLoader from "@/components/Loading";
import ApartmentCard from "@/components/apartmentCard";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";

export interface Apartment {
  _id: string;
  name: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  location: string;
  type: ApartmentType;
}
export enum ApartmentType {
  Sell = "sell",
  Rent = "rent",
}
export default async function Home() {
  const apiUrl = process.env.API_URI;

  const getApartments=async()=>{
    const response=await fetch(`${apiUrl}/apartment`);
    const data=await response.json(); 
    return data;
  }
  const apartments :Apartment[]=await getApartments();
 
  return (
    <>
      {apartments === null ? (
        <DynamicLoader />
      ) : (
        <div className="flex  flex-col items-center justify-between">
          <p className="mt-12 text-2xl font-bold text-slate-200">
            Apartment Listing
          </p>
          <p className="text-sm text-gray-500">
            Here you can find your dream apartment
          </p>
          <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
            {apartments && apartments.length > 0 && (
              <div>
                <div className="flex justify-between  my-3">
                  <h2 className="text-2xl font-semibold text-slate-400">
                    Recent Apartments
                  </h2>
                  <Link  className="group bg-green-800 md:mx-32 flex items-center g-3 p-3 rounded-md hover:opacity-50 transition-all" href={"/AddApartment"}>
                    <span>Add Apartment</span> 
                  <IoIosAddCircle className="mx-2 group-hover:scale-110"/>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4">
                  {apartments.map((apartment: Apartment) => (
                    <Link key={apartment._id} href={`/${apartment._id}`}>
                      <ApartmentCard {...apartment} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
