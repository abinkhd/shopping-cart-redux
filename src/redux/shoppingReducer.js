import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};

const shoppingSlice=createSlice({
  name:"shopping",
  initialState:initialState,
  reducers:{
    //action
    START:(state,action)=>{
{return {...state,products:action.payload}}
    },
    ADD_TO_CART:(state,action)=>{
      return {...state,cart:[...state.cart,action.payload]};
    },
    DELETE_FROM_CART:(state,action)=>{
      return {...state,cart:state.cart.filter(c=>c.product.id!==action.payload.product.id)};
    }
  }
})
console.log(shoppingSlice);
export const {START,ADD_TO_CART,DELETE_FROM_CART}=shoppingSlice.actions;
export default shoppingSlice.reducer
// console.log(shoppingReducer);