import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [], 
  favoriteData: [],
};

export const proSlice = createSlice({
  name: "pro",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
     
      const existingProduct = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
  
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
        }
      }
    },
    
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        state.favoriteData = state.favoriteData.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetFavorite: (state) => {
      state.favoriteData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addToFavorite,
  deleteFavorite,
  resetFavorite,
} = proSlice.actions;

export default proSlice.reducer;
