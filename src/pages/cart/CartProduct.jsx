import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { deleteProduct, increaseQuantity, decreaseQuantity } from "../../redux/proSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const CartProduct = ({ product }) => {
    const dispatch = useDispatch();
    const [existingProduct, setExistingProduct] = useState(null);
    const cartProduct = useSelector((state) => state.pro.productData);
    const totalPrice = existingProduct ? existingProduct.quantity * product.price : product.price;
    useEffect(() => {
        const availableItem = cartProduct.find(
            (item) => item?.id === product?.id
        );
        setExistingProduct(availableItem || null);
    }, [product, cartProduct]);

    const productName = product?.productName || "No Name";
    const handleIncrease = () => {
        dispatch(increaseQuantity({ id: product.id }));
        toast.success(`${product?.productName.substring(0, 10)} added successfully!`);
    };

    const handleDecrease = () => {
        if (existingProduct?.quantity === 1) {
            toast.error("You can't reduce further, the quantity is already 1.");
            return;
        }
        dispatch(decreaseQuantity({ id: product.id }));
        toast.success(`${product?.productName.substring(0, 10)} decreased successfully!`);
    };
    return (
        <div className="flex py-6 sm:py-10">
            <Link>
                <img
                    src={product.catImgPath}
                    alt="productImage"
                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48 duration-300"
                />
            </Link>
            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
                    <div className="flex flex-col gap-1 col-span-3">
                        <h3 className="text-base font-semibold w-full">
                            {productName.substring(0, 80)}
                        </h3>
                        <p className="text-md">
                            Brand: <span className="font-medium">{product.brand}</span>
                        </p>
                        <p className="text-md">
                            Category: <span className="font-medium">{product.category}</span>
                        </p>
                        <div className="flex items-center gap-6 mt-2">
                            <div className="flex items-center gap-2">

                                <span className="text-skyColor md:text-lg text-md font-bold">{totalPrice} EGP</span>
                            </div>
                            <div className="flex self-center items-center justify-center gap-2">
                                <button
                                    onClick={handleDecrease}
                                    className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
                                >
                                    <FaMinus />
                                </button>
                                <p className="text-base font-semibold w-10 text-center">
                                    {existingProduct?.quantity}
                                </p>
                                <button
                                    onClick={handleIncrease}
                                    className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="absolute right-0 top-0">
                            <button
                                onClick={() => dispatch(deleteProduct(product.id))}
                                className="-m2 inline-flex p-2 text-gray-600 hover:text-red-600"
                            >
                                <IoClose className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        You are saving{" "}
                        <span className="text-base font-semibold text-green-500">
                            {product?.oldPrice - product?.price}
                        </span>{" "}
                        upon purchase
                    </p>
                </div>
            </div>
        </div>
    );
};


export default CartProduct;
