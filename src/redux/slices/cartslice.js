import { createSlice } from "@reduxjs/toolkit";

export const cartslice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount:0,
    },
    reducers:{
        add:(state,{payload})=>{
            let item={details:payload,count:1};
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            if(index>=0){
               state.items[index].count+=1;
               state.totalAmount+=state.items[index].details.price;
                
            }else{
                state.items.push(item);
                state.totalAmount+=item.details.price;
            }
            
        },
        remove:(state,{payload})=>{
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            state.totalAmount-=(state.items[index].details.price*state.items[index].count);
            state.items=state.items.filter((item)=>item.deatils.id!==payload.id);
            
        },
    }

})
export const {add ,remove}=cartslice.actions;
export default cartslice.reducer;
