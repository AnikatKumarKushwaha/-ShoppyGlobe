import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import AppLayout from "./UI/AppLayout";
import NotFound from "./Components/NotFound";
import Loading from "./UI/Loading";

// Lazy loading components
const ProductList = React.lazy(() => import("./Components/ProductList"));
const ProductDetail = React.lazy(() => import("./Components/ProductDetail"));
const Cart = React.lazy(() => import("./Components/Cart"));
const CheckOut = React.lazy(() => import("./Components/CheckOut"));

export default function App() {
  // Create router with routes and lazy-loaded components
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductList />
            </Suspense>
          ),
        },
        {
          path: "/product-detail/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/check-out",
          element: (
            <Suspense fallback={<Loading />}>
              <CheckOut />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      {/* Redux store provider */}
      <RouterProvider router={router} />
    </Provider>
  );
}
