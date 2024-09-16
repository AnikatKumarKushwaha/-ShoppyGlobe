import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    checkoutItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        // If the product already exists, increase the count
        existingProduct.count += 1;
      } else {
        // If the product doesn't exist, add it to the cart with a count of 1
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    decreaseCount: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        if (state.cart[productIndex].count > 1) {
          // If the product count is more than 1, decrease the count
          state.cart[productIndex].count -= 1;
        } else {
          // If the count is 1, remove the product from the cart
          state.cart.splice(productIndex, 1);
        }
      }
    },
    checkoutCart: (state) => {
      state.checkoutItems = [...state.cart]; // Store cart items in checkoutItems
      state.cart = []; // Clear the cart
    },
    clearCheckout: (state) => {
      state.checkoutItems = []; // Clear checkout items after checkout is confirmed
    },
  },
});

export const { addToCart, checkoutCart, clearCheckout, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
