import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    filteredProducts: [],
  },

  reducers: {
    // Action to set the filtered products in the state
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload; // Update the state with the new filtered products
    },
  },
});

export default searchSlice.reducer;
export const { setFilteredProducts } = searchSlice.actions;
