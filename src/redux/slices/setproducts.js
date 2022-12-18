import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts=createAsyncThunk(
    "setProduct/fetchproducts",async()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch(error=>console.log(error));
        return response.data;
    }
)
export const setProductsSlice=createSlice({
    name:"setProducts",
    initialState:[],
    reducers:{
        setProducts(state,action){
            return action.payload

        }

    },
    extraReducers:{
        [fetchproducts.pending]:()=>{
                console.log("pending");
        },
        [fetchproducts.fulfilled]:(state,action)=>{
            return action.payload;
        },
        [fetchproducts.rejected]:()=>{
            console.log("rejected");
        },

    }
    
})

export const {setProducts}=setProductsSlice.actions;
export default setProductsSlice.reducer;