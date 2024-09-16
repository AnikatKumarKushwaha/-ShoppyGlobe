import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slices/searchSlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
