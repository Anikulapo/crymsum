import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice.js";
import categoryReducer from "./categories/categorySlice.js";

export const store = configureStore({
    reducer: {
        product : productReducer,
        category : categoryReducer,
    },
})

