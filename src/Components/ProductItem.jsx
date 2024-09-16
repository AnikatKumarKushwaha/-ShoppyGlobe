/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/Slices/cartSlice";

import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle the click event to add product to cart
  function handelClick(e) {
    e.stopPropagation();
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
  }

  return (
    <div className="flex justify-center items-center ">
      <div
        className="bg-slate-50 shadow-md p-4 rounded-md w-40 h-52 sm:w-48 sm:h-60 hover:scale-105 transition-all duration-300 relative"
        onClick={() => navigate(`/product-detail/${product.id}`)}
      >
        <div className="border-2 border-slate-300 ">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-32 h-32 sm:w-40 sm:h-40"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150"; // Fallback to placeholder on error
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-sm text-green-600">${product.price}</div>
          <div className="text-sm bg-orange-400 px-1 py-[1px] rounded-2xl flex items-center gap-1">
            <FaStar className="text-xs text-orange-50" />
            {product.rating}
          </div>
        </div>
        <div className="text-slate-600 text-sm sm:text-base">
          {product.title.length > 16
            ? product.title.slice(0, 14) + "..."
            : product.title}
        </div>
        {/* Button to add the product to the cart */}
        <button
          className="absolute top-3 right-3 p-2 bg-orange-500 text-orange-50 rounded-full shadow-md hover:scale-110 active:scale-100 transition-all duration-300 hover:shadow-xl"
          onClick={handelClick}
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
