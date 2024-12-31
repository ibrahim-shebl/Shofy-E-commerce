import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { RotatingLines } from "react-loader-spinner";
import Pagenation from "../../components/pagenation/Pagenation";

const Products = () => {
  const [products, setProducts] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);  
  const [productsPerPage] = useState(15);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://berryapp.runasp.net/api/Products");
        console.log("API Response:", response.data); // تحقق من البيانات
        setProducts(response.data);  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);  
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center my-5">
        <RotatingLines
          visible={true}
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          width="50"
        />
      </div>
    );
  }

  return (
    <div className="container py-10">
      <div>
        <h1 className="text-center font-semibold text-lg mb-8">Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {currentProducts.length > 0 ? (
          currentProducts.map((item) => <ProductCard product={item} key={item.id} />)
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
      <Pagenation
        pageCount={Math.ceil(products.length / productsPerPage)} // إجمالي عدد الصفحات
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
