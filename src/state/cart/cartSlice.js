import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getCartFromLocalStorage = () => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  items: getCartFromLocalStorage(),
  sent: [],
  totalQuantity: 0,
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
        size: action.payload.size || "M",
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
        state.totalQuantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));

      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        state.items = state.items.filter((item) => item.id !== productId);
        toast.error(`Item removed from cart`);
        localStorage.setItem("cart", JSON.stringify(state.items));
        state.totalQuantity -= 1;
      }
      const price = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.totalPrice = price;
    },
    clearCart(state) {
      state.sent.push(state.items);
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      localStorage.removeItem("cart");
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
    },
    changeSize(state, action) {
      const { id, size } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.size = size;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  changeSize,
} = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) => state.cart.totalQuantity;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;
