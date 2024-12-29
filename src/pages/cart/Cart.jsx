import React , { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Container from "../../components/container/Container";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";
import { resetCart } from "../../redux/proSlice";
import CheckoutBtn from "../../components/checkout/CheckoutBtn";
const Cart = () => {
    const { productData } = useSelector((state) => state.pro);
    const [totalAmount, setTotalAmount] = useState(0);
    const taxAmt = 50;
    const shippingAmt = 150;
    const dispatch = useDispatch();
  useEffect(() => {
    const totals = productData.reduce(
      (sum, product) => {
        sum.finalPrice += product?.price * product?.quantity || 0;
        sum.regular += product?.oldPrice * product?.quantity || 0;
        sum.discounted += ((product?.oldPrice - product?.price) * product?.quantity) || 0;
        
        return sum;
      },
      { regular: 0, discounted: 0 , finalPrice:0 }
    );
    setTotalAmount(totals);
  }, [productData]);

  const handleReset = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete('http://berryapp.runasp.net/api/Carts/clear');
          if (response.status === 204) {
            dispatch(resetCart());
            Swal.fire("Reset!", "Your cart has been reset.", "success");
          } else {
            Swal.fire("Error", "Failed to reset the cart. Please try again.", "error");
          }
        } catch (error) {
          Swal.fire("Error", "An error occurred while resetting the cart.", "error");
          console.error("Error occurred while resetting the cart:", error);
        }
      }
    });
  };
 
  return (
    <Container>
      {productData.length > 0 ? (
        <>
          <h1 className="text-3xl mt-6 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <div className="my-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section className="lg:col-span-7">
              <div className=" divide-y divide-gray-200 border-b border-t border-gray-200">
                {productData.map((product) => (
                  <CartProduct product={product} key={product?.id} />
                ))}
              </div>
              <button
                  onClick={handleReset}
                  className="bg-red-500 text-white w-36 py-3 my-5 rounded-md uppercase text-xs font-semibold hover:text-white duration-200"
                >
                  Clear
                </button>
            </section>
            <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">
                Order summary
              </h2>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                  <span className="text-skyColor font-bold">{totalAmount?.regular} EGP</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>

                    <FaQuestionCircle
                      className="h-5 w-5 text-gray-400 ml-2"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    <span>{shippingAmt} EGP</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>

                    <FaQuestionCircle
                      className="h-5 w-5 text-gray-400 ml-2"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    <span>{taxAmt} EGP</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Total Discount
                  </dt>
                  <dd className="text-base font-medium text-gray-500">
                    <span>{totalAmount.discounted} EGP</span>
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-lg font-bold text-gray-900">
                    <span>{totalAmount.finalPrice  + shippingAmt + taxAmt} EGP</span>
                  </dd>
                </div>
              </dl>
              <CheckoutBtn />
            </section>

          </div>
          
        </>
      ) : (
        <div className="bg-white my-16 h-96 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="text-lg max-w-[600px] text-center text-gray-600 tracking-wide leading-6">
            Your cart is empty. Go to the shop section and buy the products you want. Thank you.
          </p>
          <Link
            to={"/shop"}
            className="bg-gray-800 text-gray-200 px-8 py-4 rounded-md hover:bg-black hover:text-white duration-200 uppercase text-sm font-semibold tracking-wide"
          >
            go to shopping
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;
