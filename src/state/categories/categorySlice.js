import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    selectedCategory: 'all',
  };

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
})


export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
export const selectCategory = (state) => state.category.selectedCategory;// selector to get the selected category from the state


