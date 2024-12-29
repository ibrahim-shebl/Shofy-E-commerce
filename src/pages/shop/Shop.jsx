import React, { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import Container from "../../components/container/Container";
import CategoryFilters from "./CategoryFilters";
import axios from "axios";
import Loading from "../../components/loading/Loading";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://berryapp.runasp.net/api/Products");
        setProducts(response.data);
        setFilteredProducts(response.data);  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleCategorySelect = (category) => {
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);  
    }
  };
  return (
    <Container>
      <div className="flex items-start gap-10 my-8">
        <CategoryFilters onCategorySelect={handleCategorySelect} />
        <div>
          <p className="text-4xl font-semibold mb-5 text-center">Products Collection</p>
          {loading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Shop;
