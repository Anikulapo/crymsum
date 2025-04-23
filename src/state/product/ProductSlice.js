import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: 'idle',  // could be 'idle', 'loading', 'succeeded', or 'failed'
  error: null
};

const productSlice = createSlice({
  name : "product",
  initialState,
  reducers : {
    setProduct: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded'; // Set status to succeeded after fetching products
    },
    setLoading: (state) => {
      state.status = "loading"; // Set status to loading when fetching products
    },
    setError : (state, action) => {
      state.status = "failed"; // Set status to failed if there's an error
      state.error = action.payload; // Store the error message
    }
  }

})


export const fetchProducts = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Network response was not ok ');
    }
    const data = await res.json();
    const cloth = data.filter(item => (item.category == "men's clothing" || item.category == "women's clothing"))
    dispatch(setProduct(cloth));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const { setProduct, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;