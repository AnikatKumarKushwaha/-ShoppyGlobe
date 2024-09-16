import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  return (
    <div className="bg-green-400 flex items-center justify-between px-5 sm:px-10 py-2 shadow-md h-[4rem]">
      {/* Main site link with shopping cart icon */}
      <Link
        to="/"
        className=" text-base sm:text-xl font-bold text-green-50 flex justify-center items-center gap-1"
      >
        <TiShoppingCart className=" text-xl sm:text-3xl" /> SHOPPYGLOVE
      </Link>
      {/* Navigation links */}
      <div className="flex justify-center items-center gap-8">
        {/* Home link */}
        <Link
          to="/"
          className="bg-green-500 border-2 border-green-600 px-2 sm:px-4 py-1 sm:py-2 rounded-md text-green-50 hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-100"
        >
          Home
        </Link>
        {/* Cart link */}
        <Link
          to="/cart"
          className="bg-green-500 border-2 border-green-600  px-2 sm:px-4 py-1 sm:py-2  rounded-md text-green-50 hover:shadow-md hover:scale-105 transition-all duration-300 active:scale-100"
        >
          Cart
        </Link>
      </div>
    </div>
  );
}
