import React from "react";

const CheckoutBtn = ( ) => {
  return (
    <div className="mt-6">
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Checkout
        </button>
    </div>
  );
};

export default CheckoutBtn;
