import {configureStore} from "@reduxjs/toolkit"
import uislice from "./ui-slice"
import cartSlice from "./cart-slice"


const Store=  configureStore(
    {reducer:{ui:uislice.reducer ,cart:cartSlice.reducer }

}
)

export default Store