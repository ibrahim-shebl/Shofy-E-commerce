import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToFavorite, deleteFavorite } from "../../redux/proSlice";

const ProductCardSideNav = ({ product }) => {
  const { favoriteData } = useSelector((state) => state.pro);
  const [existingProduct, setExistingProduct] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();  

  useEffect(() => {
    const availableItem = favoriteData.find((item) => item?.id === product?.id);
    setExistingProduct(availableItem || null);
  }, [product, favoriteData]);

  const handleFavorite = () => {
    const accessToken = localStorage.getItem("accessToken"); // التحقق من وجود التوكن
    if (!accessToken) {
      toast.error("You must be logged in to add to favorites");
      navigate("/login");  
      return;
    }

    if (existingProduct) {
      dispatch(deleteFavorite(product?.id));
      toast.error("Removed from favorites successfully");
    } else {
      dispatch(
        addToFavorite({
          id: product?.id,
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
      toast.success("Added to favorites successfully");
    }
  };

  return (
    <div className="absolute right-1 top-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span
        onClick={handleFavorite}  
        className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200"
      >
        {existingProduct ? <FaStar /> : <FaRegStar />}
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <LuArrowLeftRight />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;
