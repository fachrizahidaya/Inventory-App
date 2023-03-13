import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "product",
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    syncData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { syncData } = productSlice.actions;

export default productSlice.reducer;
