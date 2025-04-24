import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice.js";
import categoryReducer from "./categories/categorySlice.js";
import wishReducer from "./wish/wishSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    wish : wishReducer,
  },
});
