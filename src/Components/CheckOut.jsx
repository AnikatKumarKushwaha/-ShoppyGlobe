import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Checkout() {
  // Get checkout items from the Redux store (cart state)
  const checkoutItems = useSelector((store) => store.cart.checkoutItems);

  return (
    <div className="py-10 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 ">
      <div className="bg-slate-50 p-4 rounded-md shadow-md">
        <h1 className="text-slate-600 text-base sm:text-xl font-semibold uppercase">
          Checkout Confirmation
        </h1>
        <hr className="my-3 border-slate-300" />
        {/* Display if there are items in the checkout */}
        {checkoutItems.length > 0 ? (
          <div>
            <h2 className="text-slate-600 text-sm sm:text-lg mb-4">
              Thank you for your purchase! 🎉
            </h2>
            <p className="text-slate-500 text-xs sm:text-base">
              Here are the items you purchased:
            </p>
            {/* List of items purchased */}
            <ul className="flex flex-col gap-2 my-4">
              {checkoutItems.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between border-b pb-2 text-slate-600"
                >
                  <span className="text-sm sm:text-base">
                    {product.title} (x{product.count})
                  </span>
                  <span className="text-green-500 text-sm sm:text-base">
                    ${product.price * product.count}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 mb-4 text-sm sm:text-base">
              Your order will be processed shortly.
            </p>
            {/* Link to redirect user back to home */}
            <Link
              to="/"
              className="mt-4 px-3 py-2 bg-green-500 text-green-50 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              Go to Home
            </Link>
          </div>
        ) : (
          // If there are no items in the cart
          <div className="h-96 flex flex-col justify-center items-center">
            <h1 className="text-xl text-slate-600">Your cart is now empty.</h1>
            <p className="text-slate-500">Thank you for shopping with us!</p>
            <Link
              to="/"
              className="mt-4 px-3 py-1 bg-green-500 text-green-50 rounded-lg shadow-md"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
