"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaUtensils,
  FaCoffee,
  FaIceCream,
  FaPizzaSlice,
  FaHamburger,
} from "react-icons/fa"; // Icons for categories

interface FoodItem {
  price: string;
  description: string;
}

interface Category {
  [foodName: string]: FoodItem;
}

interface Categories {
  [categoryName: string]: Category;
}

// Mapping of category icons
const categoryIcons: { [key: string]: JSX.Element } = {
  Drinks: <FaCoffee className="text-[#ff8c00] w-6 h-6" />,
  Desserts: <FaIceCream className="text-[#ff8c00] w-6 h-6" />,
  Pizza: <FaPizzaSlice className="text-[#ff8c00] w-6 h-6" />,
  Burgers: <FaHamburger className="text-[#ff8c00] w-6 h-6" />,
};

const MobileMenu = () => {
  const [categories, setCategories] = useState<Categories | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All"); // Default to "All"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://raw.githubusercontent.com/Ripple-Relaef/restaurant-data/refs/heads/main/aahaar.json"
        );
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  if (!categories) {
    return <div className="text-center text-lg mt-10">Loading menu...</div>;
  }

  // Get the filtered items based on the selected category
  const filteredCategories =
    selectedCategory === "All"
      ? categories
      : { [selectedCategory]: categories[selectedCategory] };

  return (
    <div className="">
      <div className=" p-4 font-sans text-gray-800">
        <h1 className="text-2xl font-bold text-center text-[#ff6347] mb-8">
          <img
            src="/WITHOUTBG.png"
            alt="Aahaar Logo"
            className="inline-block w-10 h-10 mr-2"
          />
          Aahaar Menu
        </h1>

        {/* Category Filters */}
        <div className="flex overflow-x-auto gap-3 mb-6">
          {/* Default "All" Option */}
          <button
            className={`flex flex-col items-center p-2 ${
              selectedCategory === "All" ? "text-[#ff8c00]" : "text-gray-600"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            <div className="bg-[#ff8c00] text-white rounded-full p-3">
              <div className=" relative w-6 h-6">
                <Image
                  src="/foodicon.svg"
                  layout="fill" // This makes the image fill the container
                  objectFit="contain"
                  alt="Food Icon"
                />
              </div>
            </div>
            <span className="text-sm mt-2">All</span>
          </button>

          {/* Category Options */}
          {Object.keys(categories).map((categoryName) => (
            <button
              key={categoryName}
              className={`flex flex-col items-center p-2 ${
                selectedCategory === categoryName
                  ? "text-[#ff8c00]"
                  : "text-gray-600"
              }`}
              onClick={() => setSelectedCategory(categoryName)}
            >
              <div className="bg-[#ff8c00] text-white rounded-full p-3">
                {categoryIcons[categoryName] || (
                  <div className=" relative w-6 h-6">
                    <Image
                      src="/foodicon.svg"
                      layout="fill" // This makes the image fill the container
                      objectFit="contain"
                      alt="Food Icon"
                    />
                  </div>
                )}
              </div>
              <span className="text-sm mt-2">{categoryName}</span>
            </button>
          ))}
        </div>

        {/* Display Menu Items */}
        {Object.entries(filteredCategories).map(
          ([categoryName, categoryItems]) => (
            <div key={categoryName} className="mb-10">
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 justify-between  border-b border-black pb-2">
                {/* {categoryIcons[categoryName] || (
                            <Image src="/foodicon.svg" width={20} height={20} alt="Food Icon" className="text-[#ff8c00]"/>
                        )} */}
                <h2 className="text-xl font-bold text-[#ff8c00]">
                  {categoryName}
                </h2>
                <p className="text-sm text-gray-600">
                  {Object.keys(categoryItems).length} items
                </p>
              </div>

              {/* Food Items */}
              <div className="space-y-4">
                {Object.entries(categoryItems).map(
                  ([foodName, foodDetails]) => (
                    <div
                      key={foodName}
                      className="flex justify-between items-start border-b border-dotted pb-2"
                    >
                      <div>
                        <h3 className="text-lg font-semibold">{foodName}</h3>
                        <p className="text-sm text-gray-600">
                          {foodDetails.description}
                        </p>
                      </div>
                      <p className="text-[#ff6347] font-bold">
                        {foodDetails.price}/-
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        )}

        {/* Footer */}
      </div>
      <div className="text-center bg-[#ff8c00] text-white p-2 w-screen fixed bottom-0">
        <p className="text-sm">
          Designed and custom-built for Aahaar by{" "}
          <Link
            href="https://ripple.relaef.com"
            className="underline font-medium"
          >
            Ripple
          </Link>{" "}
          — a step towards the digital wave.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
