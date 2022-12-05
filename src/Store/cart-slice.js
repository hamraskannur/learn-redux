import {createSlice} from "@reduxjs/toolkit"


const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addItemToCart(state,actions){
                const newitem =actions.payload;
                
                const existingItem=state.items.find(item=>item.id=== newitem.id)
                state.totalQuantity++
                if(!existingItem){
                    state.items.push({id:newitem.id,price:newitem.price,quantity:1,totalprice:newitem.price ,name:newitem.title})
                }else{
                    existingItem.quantity++
                    existingItem.totalprice=existingItem.totalprice+newitem.price
                }
        },
        removeItemFromCart(state,actions){
            const newitem =actions.payload;
            const existingItem=state.items.find(item=>item.id=== newitem.id)
            state.totalQuantity--
            if(existingItem.quantity===1){
                state.items= state.items.filter(item=>item.id !== newitem.id)     
              }else{
                existingItem.totalprice=existingItem.totalprice-newitem.price
                existingItem.quantity--
              }
        }
    }
})

export const CartActions= cartSlice.actions

export default cartSlice