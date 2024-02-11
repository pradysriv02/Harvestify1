"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function CropForm({ children }) {
  const soils = [
    {
      name: "Select Soil",
      value: null,
    },
    {
      name: "Black Soil",
      value: 0,
    },
    {
      name: "Red Soil",
      value: 3,
    },
    {
      name: "Clayey Soil",
      value: 1,
    },
    {
      name: "Sandy Soil",
      value: 4,
    },
    {
      name: "Loamy Soil",
      value: 2,
    },
  ];

  const crop = [
    {
      name: "Select Crop",
      value: null,
    },
    {
      name: "Barley",
      value: 0,
    },
    {
      name: "Cotton",
      value: 1,
    },
    {
      name: "Ground Nuts",
      value: 2,
    },
    {
      name: "Maize",
      value: 3,
    },
    {
      name: "Millets",
      value: 4,
    },
    {
      name: "Oil Seeds",
      value: 5,
    },
    {
      name: "Paddy",
      value: 6,
    },
    {
      name: "Pulses",
      value: 7,
    },
    {
      name: "SugarCane",
      value: 8,
    },
    {
      name: "Tobaco",
      value: 9,
    },
    {
      name: "Wheat",
      value: 10,
    },
  ];

  const intialFormData = {
    name: "",
    crop: 0,
    n: 0,
    p: 0,
    k: 0,
    area: "",
    soil: 0,
  };

  const [formData, setFormData] = useState(intialFormData);

  async function handleAddProduct() {
    const res = await fetch("/api/product/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      handleButtonClick();
    });
  }

  const handleButtonClick = () => {
    toast.success("Farmer Details Created/Updated !");
  };

  return (
    <form class="max-w-md mx-auto ">
      <div class="border-[0.5px] border-grey-400 p-10 rounded-lg bg-white">
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="loc"
            name="loc"
            id="loc"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            required
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
          />
          <label
            for="loc"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <select
            onChange={(e) => setFormData({ ...formData, soil: e.target.value })}
            id="soil"
            class="bg-transparent border-b-2 border-gray-300 text-sm text-gray-400 block w-full py-2.5">
            {soils.map((item) => (
              <option value={`${item.value}`}>{`${item.name}`}</option>
            ))}
          </select>
        </div>

        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="n"
              id="n"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              onChange={(e) => setFormData({ ...formData, n: e.target.value })}
            />
            <label
              for="n"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Nitrogen %
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="p"
              id="p"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              onChange={(e) => setFormData({ ...formData, p: e.target.value })}
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phosphorus %
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="k"
              id="k"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              onChange={(e) => setFormData({ ...formData, k: e.target.value })}
            />
            <label
              for="k"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Potassium %
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <select
            onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
            id="crop"
            class="bg-transparent border-b-2 border-gray-300 text-sm text-gray-400 block w-full py-2.5">
            {crop.map((item) => (
              <option value={`${item.value}`}>{`${item.name}`}</option>
            ))}
          </select>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddProduct(e);
            }}
            type="submit"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-700">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
