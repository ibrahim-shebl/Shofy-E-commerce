import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryFilters = ({ onCategorySelect }) => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://berryapp.runasp.net/api/Products");
        setProductData(response.data);  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const uniqueCategories = [...new Set(productData.map((product) => product.category))];

  return (
    <div className="hidden md:inline-flex flex-col gap-6">
      <p className="text-3xl font-bold">Filters</p>
      <div>
        <p className="text-sm uppercase font-semibold underline underline-offset-2 decoration-[1px] mb-2">
          Select Categories
        </p>
        <div className="flex flex-col gap-y-2 min-w-40">
          {loading ? (
            <div className="flex items-center justify-center my-5">
            </div>
          ) : (
            uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => onCategorySelect(category)} // تمرير الفئة المختارة
                className="text-base font-medium text-start underline underline-offset-2 decoration-[1px] decoration-transparent hover:decoration-gray-950 hover:text-black duration-200"
              >
                {category}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilters;
