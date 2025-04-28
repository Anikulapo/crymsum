import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getPayment = () => {
  const stored = localStorage.getItem("payment");
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  items: getPayment(),
  paymentOptions: 0,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addCard(state, action) {
      const existingCard = state.items.some(
        (item) => item.number == action.payload.number
      );
      if (!existingCard) {
        const newCard = {
          ...action.payload,
        };
        state.items.push(newCard);
        state.paymentOptions += 1;
        toast.success("A New Payment option as been Added!");
        localStorage.setItem("payment",JSON.stringify(state.items))
      } else {
        toast.error("This Card Already Exists");
      }
    },
    removeCard(state, action) {
      const cardId = action.payload;
      state.items = state.items.filter((item) => item.id !== cardId);
      state.paymentOptions -= 1;
      toast.success("This Card was removed!");
      localStorage.setItem("payment",JSON.stringify(state.items))
    },
  },
});

export default paymentSlice.reducer;
export const selectPayments = (state) => state.payment.items;
export const { addCard, removeCard } = paymentSlice.actions;
