import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const getWishlistFromLocalStorage = () => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  };

const initialState = {
    item : getWishlistFromLocalStorage(),
}

const wishSlice = createSlice({
    name : "wish",
    initialState,
    reducers : {
        addToWish: (state, action) => {
            const existingItem = state.item.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.item.push(action.payload);
                localStorage.setItem('wishlist', JSON.stringify(state.item));
                toast.success("Item Added to Wishlist!")
            }
            else{
                toast.error("Item already in wishlist!");
            }
        },
        removeFromWish: (state, action) => {
            const updatedWishlist = state.item.filter(item => item.id !== action.payload.id);
            state.item = updatedWishlist;
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.error("Item removed from wishlist!");
        },
    }
})


export default wishSlice.reducer;
export const { addToWish, removeFromWish } = wishSlice.actions;
export const selectWish = (state) => state.wish.item; // selector to get the wishlist from the state