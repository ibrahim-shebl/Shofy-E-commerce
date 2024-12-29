import React, { useEffect, useState } from "react";
import Loading from '../../components/loading/Loading';
import Container from '../../components/container/Container'
import productPayment from "../../assets/productPayment.webp";
import axios from "axios";
import { useParams } from "react-router-dom";
import RenderStar from "./RenderStar";
import AddReview from "./AddReview";
import Reviews from "./Reviews";
import { RotatingLines } from "react-loader-spinner";
const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`http://berryapp.runasp.net/api/Products/${id}`);
        setProductData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  if (loading) {
    return <div className="text-center mt-6 text-lg"><Loading /></div>;
  }
  return (
    <>
      <div>
        {loading ? (
          <div className="flex items-center justify-center my-5">
            <RotatingLines
              visible={true}
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              width="50"
            />
          </div>
        ) : (
          <Container>
            {productData && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10" key={productData.id}>
                <div className="flex flex-start mt-6 md:mt-16">
                  <div>
                    <img src={productData.catImgPath} alt={productData.productName} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:mt-16">
                  <h2 className="text-3xl font-bold">{productData.productName}</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through font-normal">
                        {productData.oldPrice} EGP
                      </span>
                      <span className="text-skyColor font-bold">
                        {productData.price} EGP
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-base text-lightText flex items-center">
                        {RenderStar(productData.rate)}

                      </div>
                      <p className="text-base font-semibold">
                        {`(${productData.rate} rate)`}
                      </p>
                    </div>
                  </div>
                  <p>
                    You are saving{" "}
                    <span className="text-base font-semibold text-green-500">
                      {productData?.oldPrice - productData?.price}
                    </span>{" "}
                    upon purchase
                  </p>
                  <p>
                    Description: <span className="font-medium">{productData.description}</span>
                  </p>
                  <p>
                    Brand: <span className="font-medium">{productData.brand}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="font-medium">{productData.category}</span>
                  </p>
                  <button className="bg-black/80 py-3 text-base text-gray-200 hover:scale-100 hover:text-white duration-200">
                    Add To Cart
                  </button>
                  <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
                    <img
                      src={productPayment}
                      alt="payment"
                      className="w-auto object-cover"
                    />
                    <p className="font-semibold">
                      Guaranteed safe & secure checkout
                    </p>
                  </div>
                </div>

              </div>
            )}
          </Container>
        )}
      </div>
      <div className="flex justify-center py-10">

        <div className="flex flex-col md:flex-row gap-4 md:max-w-[900px] w-full">
          <AddReview />
          <Reviews />
        </div>

      </div>
    </>
  );

}

export default ProductDetails