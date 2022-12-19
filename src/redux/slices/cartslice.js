import { createSlice } from "@reduxjs/toolkit";

export const cartslice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount:1,
    },
    reducers:{
        add:(state,{payload})=>{
            let item={details:payload,count:1};
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            if(index>=0){
               state.items[index].count+=1;
               state.totalAmount+=Math.round(state.items[index].details.price);
                
            }else{
                state.items.push(item);
                state.totalAmount+=Math.round(item.details.price);
            }
            
        },
        remove:(state,{payload})=>{
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            state.totalAmount-=Math.round(state.items[index].details.price*state.items[index].count);
            const newitems=state.items.filter((i)=>i.details.id!==payload.id)
            state.items=newitems;
            
        },
        increasequan:(state,{payload})=>{
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            state.items[index].count+=1;
            state.totalAmount+=Math.round(state.items[index].details.price);


        },
        decreasequqn:(state,{payload})=>{
            const index=state.items.findIndex(item=>item.details.id===payload.id);
            if(state.items[index].count>1){
                state.items[index].count-=1;
                state.totalAmount-=Math.round(state.items[index].details.price);
            }
        },
        checkout:()=>{
            return {
                items:[],
                totalAmount:1,
            }
        }
    }

})
export const {add ,remove,increasequan ,decreasequqn,checkout}=cartslice.actions;
export default cartslice.reducer;
