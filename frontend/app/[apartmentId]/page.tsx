import { Apartment } from "../page";
import { IoBed } from "react-icons/io5";
import { FaBath, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import DynamicLoader from "@/components/Loading";

const Page = async ({ params }: { params: { apartmentId: string } }) => {
  const apiUrl = process.env.API_URI;
  const getApartment = async () => {
    const response = await fetch(`${apiUrl}/apartment/${params.apartmentId}`);
    const data = await response.json();
    return data;
  };
  const apartment: Apartment = await getApartment();
  return (
    <div className="container mx-auto my-8 px-8 sm:px-60  bg-gray">
      <Link
        href="/"
        className="hover:underline hover:text-blue-500 transition-all"
      >
        Back to Listing
      </Link>
      {apartment ? (
        <>
          <h1 className="text-4xl font-bold mb-4 text-slate-100">
            Apartment Details
          </h1>
          <div className="flex justify-center">
            <img
              src={apartment.image}
              alt={apartment.name}
              className="w-full h-80 object-cover rounded-md shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mt-4 text-slate-200">
            {apartment.name}
          </h1>
          <p className="flex items-center gap-2 m-1 text-slate-500 font-semibold text-sm">
            <FaMapMarkerAlt className="text-slate-700" />
            {apartment.location}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900 p-4 rounded-md">
              <p className="text-2xl font-semibold text-white mb-2">
                Listing Info
              </p>
              <div className="flex flex-col space-y-2">
                <p className="text-xl  text-slate-200 font-bold">
                  {" "}
                  ${apartment.price}
                  {apartment.type === "rent" && " / month"}
                </p>
                <div className="text-slate-200 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
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
                <p>
                  <span className="font-semibold">For {apartment.type} </span>
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-md">
              <p className="text-2xl font-semibold mb-2">Description</p>
              <p className="text-lg text-slate-200 max-h-32 scroll-smooth overflow-auto">
                {apartment.description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <DynamicLoader />
      )}
    </div>
  );
};

export default Page;
