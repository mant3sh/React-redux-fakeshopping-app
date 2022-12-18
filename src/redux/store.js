import { configureStore } from "@reduxjs/toolkit";
import cartslice  from "./slices/cartslice";
import selectedProductSlice from "./slices/selectedProduct";
import setProductReducer from "./slices/setproducts";



const store=configureStore({
    reducer:{
        products:setProductReducer,
        cart:cartslice,
        selectedProduct:selectedProductSlice,

    },
});

export default store;