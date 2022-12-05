import {configureStore} from "@reduxjs/toolkit"
import uislice from "./ui-slice"


const Store=  configureStore(
    {reducer:{ui:uislice.reducer}

}
)

export default Store