import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../Redux/Slices/searchSlice";
import useFetchProduct from "../Hooks/useFetchProduct";
import ProductItem from "./ProductItem";
import { IoSearch } from "react-icons/io5";
import Loading from "../UI/Loading";
import Error from "../UI/Error";

export default function ProductList() {
  //custom hook for fetching product list
  const { products, error, loading } = useFetchProduct(
    "https://dummyjson.com/products"
  );

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const filteredProducts = useSelector(
    (state) => state.search.filteredProducts
  );

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;

    const filtered = products?.products?.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    dispatch(setFilteredProducts(filtered));
  };

  // UseEffect to initialize filteredProducts with the full product list when data is fetched
  useEffect(() => {
    if (products?.products) {
      dispatch(setFilteredProducts(products.products));
    }
  }, [products, dispatch]);

  // Render different UI based on loading, error, or product data availability
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="px-5 py-2 h-full">
      <div className="flex justify-center items-center my-4">
        <div className="relative ">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for product"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-3 py-2 w-60 sm:w-80 rounded-full shadow-md outline-green-600"
          />
          <div className="absolute top-1 right-2 text-slate-500 p-2 rounded-full">
            <IoSearch className="text-lg" />
          </div>
        </div>
      </div>

      <h1 className="text-lg sm:text-xl uppercase font-semibold text-slate-700">
        Product List
      </h1>
      {/* Display the list of filtered products */}

      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3  my-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="h-96 flex justify-center items-center  w-[100%] font-bold text-slate-600 uppercase">
          No products available 🥲
        </div>
      )}
    </div>
  );
}
