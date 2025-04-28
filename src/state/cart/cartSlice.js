import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {createOrder} from "../order/orderSlice.js";

const getCartFromLocalStorage = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const getTotalPrice = ()=> {
  const stored = localStorage.getItem('price')
  return stored ? JSON.parse(stored) : 0;
}



const initialState = {
  items: getCartFromLocalStorage(),
  sent: [],
  totalQuantity: getTotalPrice(),
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = {
        ...action.payload,
        quantity: 1,
      };
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        toast.success(`Item quantity increased`);
      } else {
        state.items.push(product);
        toast.success(`Item added to cart`);
        state.totalQuantity = state.items.length;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));

      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
      localStorage.setItem("price", JSON.stringify(state.totalPrice));
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        state.items = state.items.filter((item) => item.id !== productId);
        toast.error(`Item removed from cart`);
        localStorage.setItem("cart", JSON.stringify(state.items));
        state.totalQuantity = state.items.length;
      }
      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
      localStorage.setItem("price", JSON.stringify(state.totalPrice));
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("price")
    },
    increaseItemQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
        toast.success(`Item quantity increased`);
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
      localStorage.setItem("price", JSON.stringify(state.totalPrice));
    },
    decreaseItemQuantity(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          toast.success(`Item quantity decreased`);
        } else {
          state.items = state.items.filter((item) => item.id !== productId);
          toast.error(`Item removed from cart`);
          state.totalQuantity -= 1;
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
      localStorage.setItem("price", JSON.stringify(state.totalPrice));
    },
    changeSize(state, action) {
      const { id, size } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.size = size;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }

    },
    reset(state){
      state.totalQuantity = state.items.length;
    }
  },
});

export const placeOrder = createAsyncThunk(
    "cart/placeOrder",
    async (_, { getState, dispatch }) => {
      const state = getState();
      const cart = state.cart;
  
      const orderDetails = {
        items: [...cart.items],
        totalPrice: cart.totalPrice,
        totalQuantity: cart.totalQuantity,
      };
  
      // Dispatch the createOrder action
      dispatch(createOrder(orderDetails));
  
      // Clear the cart after placing the order
      dispatch(clearCart());
  
    }
  );





export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  changeSize,
  reset
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
