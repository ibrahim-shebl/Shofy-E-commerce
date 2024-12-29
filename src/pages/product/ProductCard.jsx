import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MdOutlineStarOutline } from "react-icons/md";
import ProductCardSideNav from './ProductCardSideNav';
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import Aos from "aos";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/proSlice";
const ProductCard = ({ product, item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [existingProduct, setExistingProduct] = useState(null);
  const cartProduct = useSelector((state) => state.pro.productData);

  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?.id === product?.id
    );
    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleProduct = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/product/${product?.id}`);
    }, 300);
  };

  const handleAddToCart = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      // إذا لم يكن التوكن موجودًا
      toast.error("You need to log in to add products to the cart.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://berryapp.runasp.net/api/Carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // إضافة التوكن إلى الـ headers
        },
        body: JSON.stringify({
          cartItems: [
            {
              productId: product.id,
              quantity: 1,
            },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Product added to cart successfully!");

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

        console.log(data);
      } else {
        toast.error("Failed to add product to cart.");
        console.error("Error:", await response.text());
      }
    } catch (error) {
      toast.error("An error occurred while adding the product to cart.");
      console.error("Error:", error);
    }
  };




  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
    });
  }, []);

  return (
    <div
      key={product.id}
      data-aos="fade-up"
      data-aos-delay={`${product * 100}`}
      className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer"
    >
      <div className="w-full h-60 relative p-2 group">
        <span
          onClick={open}
          className="bg-black text-[#32BDE8] absolute left-0 right-0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10"
        >
          save {product?.discountPercentage}%
        </span>
        <img
          onClick={handleProduct}
          src={encodeURI(product.catImgPath)}
          alt="productImage"
          className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
        />
        {loading && <Loading />}
        <ProductCardSideNav product={product} />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="text-xs uppercase font-semibold text-[#9b9b9b]">
          {product?.brand}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">{product?.productName}</h2>
        <div className="text-base text-[#9b9b9b] flex items-center">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 line-through font-normal">{product.oldPrice} EGP</span>
          <span className="text-skyColor font-bold">{product.price} EGP</span>
        </div>
        <button
          onClick={handleAddToCart}

          className="bg-transparent border w-full border-skyColor text-black rounded-full py-2 hover:bg-skyColor hover:text-white duration-300 my-2 text-sm"
        >
          Add to cart
        </button>
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black backdrop-blur-2xl z-50 p-6">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Hurry up!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    You are going to save{" "}
                    <span className="text-base font-semibold text-green-500">
                      {product?.oldPrice - product?.price}
                    </span>{" "}
                    from this product.
                  </p>
                  <p className="text-sm/6 text-white/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, consequatur?
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
