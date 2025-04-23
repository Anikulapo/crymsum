import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetch",
    async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            const clothes =  data.filter(
              (item) => item.category == "men's clothing" || item.category == "women's clothing"
            )
            setCloth(clothes)
          } catch (error) {
            setError(error.message);
          } finally {
            setIsLoading(false);
          }
    }
)


const productSlice = createSlice({
    name :  "Clothes",
    initialState,
})