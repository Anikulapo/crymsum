import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice.js";
import categoryReducer from "./categories/categorySlice.js";
import wishReducer from "./wish/wishSlice.js";
import cartReducer from "./cart/cartSlice.js";
import orderReducer from "./order/orderSlice.js";
import paymentReducer from "./card/paymentSlice.js"
import userReducer from "./user/userSlice.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    wish : wishReducer,
    cart : cartReducer,
    orders : orderReducer,
    payment : paymentReducer,
    user : userReducer
  },
});
