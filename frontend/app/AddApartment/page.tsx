"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApartmentType } from "../page";

interface NewApartment {
  name: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  location: string;
  type: ApartmentType;
}

const AddApartmentPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<NewApartment>({
    name: "",
    price: 0,
    description: "",
    bedrooms: 0,
    bathrooms: 0,
    location: "",
    type: ApartmentType.Sell,
  });
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.API_URI;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.id === "sell" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id as ApartmentType,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      const value =
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value;

      setFormData({
        ...formData,
        [e.target.id]: value,
      });
    }
  };
  console.log(formData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/apartment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await res.json();
      setLoading(false);
      setFormData(data);
      router.push(` /${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-white-700 text-center my-7">
        Create A Listing
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 mx-auto">
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="p-3 rounded-lg bg-gray-700 border border-gray-300"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <textarea
            id="description"
            className="p-3 rounded-lg bg-gray-700 border border-gray-300"
            placeholder="Description"
            required
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <input
            type="text"
            placeholder="Location"
            id="location"
            className="p-3 rounded-lg bg-gray-700 border border-gray-300"
            required
            onChange={handleChange}
            value={formData.location}
          />
          <div className="flex gap-6 flex-wrap items-center">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sell"
                onChange={handleChange}
                checked={formData.type === "sell"}
                className="w-5 bg-gray-700"
              />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                onChange={handleChange}
                checked={formData.type === "rent"}
                className="w-5 bg-gray-700"
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="price"
                className="p-3 border bg-gray-700 rounded-lg"
                min="200"
                max="10000000"
                required
                onChange={handleChange}
                value={formData.price}
              />
              <p>
                Price{" "}
                {formData.type === "rent" ? (
                  <span className="text-xs">$ / Month</span>
                ) : (
                  <span className="text-xs">$</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                className="p-3 border bg-gray-700 rounded-lg"
                min="1"
                max="10"
                required
                onChange={handleChange}
                value={formData.bedrooms}
              />
              <p>Bedrooms</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                className="p-3 border bg-gray-700 rounded-lg"
                min="1"
                max="10"
                required
                onChange={handleChange}
                value={formData.bathrooms}
              />
              <p>Bathrooms</p>
            </div>
          </div>
          <button
            disabled={loading}
            className="bg-green-700 max-w-40 text-white p-3 rounded-lg uppercase my-6 hover:opacity-75 disabled:opacity-55 disabled:cursor-not-allowed"
          >
            {loading ? "Adding..." : "Add Apartment"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddApartmentPage;
