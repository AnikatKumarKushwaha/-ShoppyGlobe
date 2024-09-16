import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { checkoutCart } from "../Redux/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(cart);

  // Function to handle checkout: dispatch checkout action and navigate to the checkout page
  function handelCheckOut() {
    dispatch(checkoutCart()); // Clear the cart by dispatching the checkoutCart action
    navigate("/check-out");
  }

  return (
    <div className="py-10 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 ">
      <div className="bg-slate-50 p-4 rounded-md shadow-md">
        <h1 className="text-slate-600 text-xl font-semibold">CART</h1>
        <hr className="my-3 border-slate-300" />
        {/* If cart is not empty, display the items */}
        {cart.length > 0 ? (
          <div>
            <ul className="flex flex-col gap-2">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </ul>
            <div className="text-center mt-5">
              <button
                onClick={handelCheckOut}
                className="px-10 py-2 bg-green-500 rounded-md shadow-md text-green-50"
              >
                Check out
              </button>
            </div>
          </div>
        ) : (
          // If cart is empty, display a message and a link to go back home
          <div className="h-96 flex flex-col justify-center items-center">
            <h1 className="text-xl text-slate-600">
              No products in the cart🥲.
            </h1>
            <p className="text-slate-500">Try Adding Some</p>
            <Link
              to="/"
              className="mt-4 px-3 py-1 bg-green-500 text-green-50 rounded-lg shadow-md"
            >
              Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
