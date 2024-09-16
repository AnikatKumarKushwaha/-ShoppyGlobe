import { useDispatch } from "react-redux";
import { addToCart, decreaseCount } from "../Redux/Slices/cartSlice";

/* eslint-disable react/prop-types */
export default function CartItem({ product }) {
  const dispatch = useDispatch();

  // Function to handle increasing the quantity of the item in the cart
  function handelAddCart() {
    dispatch(addToCart(product));
  }
  // Function to handle decreasing the quantity of the item in the cart
  function handelRemoveCart() {
    dispatch(decreaseCount(product));
  }
  return (
    <li className="sm:grid sm:grid-cols-[1fr_2fr_1fr_1fr]  lg:grid-cols-[0.6fr_2fr_1fr_1fr] rounded-md border border-slate-200 shadow-md gap-4">
      {/* Product image display */}
      <div className=" m-2 flex justify-center items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-20 h-20 border-2 border-slate-300 rounded-md"
        />
      </div>
      {/* Product title and brand details */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-slate-600 text-center">{product.title}</p>
        <p className="text-slate-400 text-center text-sm">{product.brand}</p>
      </div>

      {/* Quantity control with buttons to increase or decrease the item count */}
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 py-1 px-3 text-slate-50 rounded-md mr-5 hover:bg-blue-700 transition-all duration-300"
          onClick={handelRemoveCart}
        >
          -
        </button>
        <span>{product.count}</span>
        <button
          className="bg-red-500 py-1 px-3 text-slate-50 rounded-md ml-5 hover:bg-red-700 transition-all duration-300"
          onClick={handelAddCart}
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center text-green-500">
        ${(product.price * product.count).toFixed(2)}
      </div>
    </li>
  );
}
