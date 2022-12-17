import { configureStore } from "@reduxjs/toolkit";
import cartslice  from "./slices/cartslice";
import selectedProductSlice from "./slices/selectedProduct";



const store=configureStore({
    reducer:{
        cart:cartslice,
        selectedProduct:selectedProductSlice,
    },
});

export default store;