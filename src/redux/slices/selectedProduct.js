import { createSlice } from "@reduxjs/toolkit";

export const selectedProductSlice=createSlice({
    name:"selectedProduct",
    initialState:{},
    reducers:{
        setSelectedProduct:(state,action)=>{
            return {...state,...action.payload};
        },
        removeSelectedProduct:()=>{
            return {};
        }
    }
})

export const {setSelectedProduct, removeSelectedProduct} =selectedProductSlice.actions;
export default selectedProductSlice.reducer;