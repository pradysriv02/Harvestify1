"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CropForm({ children }) {
  const [name, setname] = useState("");
  const [loc, setloc] = useState("");
  const [soil, setsoil] = useState("");
  const [checkboxValue, setCheckboxValue] = useState([]);
  const [nitrogen, setNitrogen] = useState("");
  const [potassium, setPotassium] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [phlevel, setPhlevel] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [recommendCrop, setRecommendCrop] = useState("");
  const soils = [
    {
      name: "Select Soil",
      value: null,
    },
    {
      name: "Black Soil",
      value: "black",
    },
    {
      name: "Red Soil",
      value: "red",
    },
    {
      name: "Clay Soil",
      value: "clay",
    },
    {
      name: "Peat Soil",
      value: "peat",
    },
    {
      name: "Sandy Soil",
      value: "sandy",
    },
    {
      name: "Slit Soil",
      value: "Slit",
    },
    {
      name: "Chalk Soil",
      value: "chalk",
    },
    {
      name: "Alluvial Soil",
      value: "alluvial",
    },
  ];

  const intialFormData = {
    name: "",
    crop: "",
    n: 0,
    p: 0,
    k: 0,
    area: "",
    soil: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  async function handleAddProduct() {
    const res = await fetch("/api/product/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <form class="max-w-md mx-auto">
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label
          for="name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="loc"
          name="loc"
          id="loc"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
        />
        <label
          for="loc"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
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
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setFormData({ ...formData, n: e.target.value })}
          />
          <label
            for="n"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nitrogen %
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="p"
            id="p"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setFormData({ ...formData, p: e.target.value })}
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Phosphorus %
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="k"
            id="k"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) => setFormData({ ...formData, k: e.target.value })}
          />
          <label
            for="k"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Potassium %
          </label>
        </div>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="crop"
          id="crop"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
        />
        <label
          for="crop"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Crop
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
}
