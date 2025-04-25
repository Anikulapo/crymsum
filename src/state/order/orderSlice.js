import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getOrdersFromLocalStorage = () => {
  const stored = localStorage.getItem("orders");
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  orders: getOrdersFromLocalStorage(),
  activeOrder: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder(state, action) {
      const date = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      const readableDate = date.toLocaleDateString(undefined, options);
      // Create new order from cart items and additional info
      const orderDetails = {
        id: Date.now().toString(), // Unique order ID
        items: [...action.payload.items],
        totalPrice: action.payload.totalPrice,
        totalQuantity: action.payload.items.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        status: "Processing", // Initial status

        date: readableDate,
      };

      // Add to orders array
      state.orders.unshift(orderDetails); // Add to beginning for chronological order
      toast.success("Order placed successfully!");

      // Save to localStorage
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },

    updateOrderStatus(state, action) {
      const { orderId, status } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.status = status;
        localStorage.setItem("orders", JSON.stringify(state.orders));
        toast.success(`Order status updated to ${status}`);
      }
    },

    cancelOrder(state, action) {
      const orderId = action.payload;
      const orderToCancel = state.orders.find((order) => order.id === orderId);

      if (
        orderToCancel &&
        ["Processing", "Pending"].includes(orderToCancel.status)
      ) {
        orderToCancel.status = "Cancelled";
        localStorage.setItem("orders", JSON.stringify(state.orders));
        toast.success("Order cancelled successfully");
      } else {
        toast.error("This order cannot be cancelled");
      }
    },
  },
});

export const {
  createOrder,
  updateOrderStatus,
  cancelOrder,
  setActiveOrder,
  clearActiveOrder,
} = orderSlice.actions;

export const selectAllOrders = (state) => state.orders.orders;
export const selectActiveOrder = (state) => state.orders.activeOrder;
export const selectOrderById = (state, orderId) =>
  state.orders.orders.find((order) => order.id === orderId);

export default orderSlice.reducer;
