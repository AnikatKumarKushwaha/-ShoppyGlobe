import { useParams } from "react-router-dom";
import useFetchProduct from "../Hooks/useFetchProduct";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/cartSlice";
import Loading from "../UI/Loading";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Custom hook to fetch product data from the API
  const { products, error, loading } = useFetchProduct(
    "https://dummyjson.com/products"
  );

  // Find the specific product by ID from the fetched product list
  const product = products?.products?.find(
    (product) => product.id === parseInt(id) // Ensure the ID is parsed as an integer
  );

  // Function to dispatch an action to add the product to the cart
  function handelAddToCart() {
    dispatch(addToCart(product));
  }

  // Render different UI based on loading, error, or product data availability
  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="flex flex-col justify-center items-center md:flex-row gap-4 px-5 lg:px-10 py-10">
      {/* Display the product image */}
      <div className="md:w-[44%] lg:w-[40%]">
        <div className=" bg-white flex justify-center items-center rounded-md w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover mb-4"
          />
        </div>
      </div>

      {/* Display the product details such as title, price, and description */}
      <div className="  md:w-[66%] lg:w-[60%]">
        <h1 className=" text-slate-700 text-xl font-bold">{product.title}</h1>
        <div className="flex gap-1 justify-center items-center bg-orange-500 text-orange-50 px-2 py-1 rounded-full text-sm w-40 mt-2">
          <p className="">Rating: {product.rating}</p>
          <FaStar />
        </div>
        <hr className="my-2 lg:my-3 xl:my-5" />

        <p className="font-bold text-slate-600">Price: Rs. {product.price}$</p>
        <p className=" text-slate-500 text-sm">{product.returnPolicy}</p>
        <hr className="my-2 lg:my-3 xl:my-5" />

        <p className="mt-4 text-slate-600 text-sm lg:text-base xl:font-semibold">
          {product.description}
        </p>
        <hr className="my-2 lg:my-3 xl:my-5" />

        {/* Button to add the product to the cart */}
        <div className="flex gap-1 justify-center items-center md:justify-start md:items-start">
          <button
            className="bg-orange-500 text-orange-50 px-5 py-2  xl:py-3 rounded-full  flex gap-1 justify-center items-center shadow-md hover:-translate-y-1 active:translate-y-0 duration-300"
            onClick={handelAddToCart}
          >
            Add To Cart <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
