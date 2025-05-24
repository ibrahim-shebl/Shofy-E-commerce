import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/proSlice";
import { deleteFavorite } from "../../redux/proSlice";
const FavoriteProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [existingProduct, setExistingProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const favouriteProduct = useSelector((state) => state.pro.productData);
  const totalPrice = existingProduct ? existingProduct.quantity * product.price : product.price;

  useEffect(() => {
    const availableItem = favouriteProduct.find(
      (item) => item?.id === product?.id
    );
    setExistingProduct(availableItem || null);
  }, [product, favouriteProduct]);

  const handleProduct = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/product/${product?.id}`);
    }, 300);
  };
  const handleAddToCart = () => {
  dispatch(
    addToCart({
      id: product.id,
      productName: product.productName,
      catImgPath: product.catImgPath,
      category: product.category,
      description: product.description,
      price: product.price,
      oldPrice: product.oldPrice,
      discountPercentage: product.discountPercentage,
      brand: product.brand,
      rate: product.rate,
      quantity: 1,
    })
  );
  toast.success("Product added to cart successfully!");
};

  return (
    <div className="flex py-6">
      <div className="min-w-0 flex-1 lg:flex lg:flex-col">
        <div className="lg:flex-1">
          <div className="sm:flex">
            <div>
              <h2 className="font-medium text-black text-xl">{product?.productName}</h2>
              <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                {product?.description}
              </p>
              <p className="text-xl mt-1">
                Brand: <span className="font-medium">{product?.brand}</span>
              </p>
              <p className="text-xl mt-1">
                Category:{" "}
                <span className="font-medium">{product?.category}</span>
              </p>
            </div>
            <span
              onClick={() =>
                dispatch(deleteFavorite(product.id))
              }
              className="text-lg text-gray-600 hover:text-red-600 duration-200 cursor-pointer inline-block mt-4 sm:mt-0"
            >
              <MdClose />
            </span>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center gap-2">

              <span className="text-skyColor text-lg font-bold">{totalPrice} EGP</span>
            </div>
            <button
              onClick={handleAddToCart}

              className="bg-[#f7f7f7] uppercase text-[10px] px-1 py-3 md:px-4 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleProduct}
        className="ml-4 flex-shrink-0 h-20 w-20 sm:w-40 sm:h-40 sm:order-first sm:m-0 sm:mr-6 rounded-md hover:border-skyText duration-200 cursor-pointer group overflow-hidden"
      >
        <img
          src={product?.catImgPath}
          alt="productImage"
          className="h-full w-full rounded-lg object-cover object-center group-hover:scale-110 duration-200"
        />
      </div>
    </div>
  );
};

export default FavoriteProduct;
