import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from './cart/slice'

const rootReducer = combineReducers({ cartReducer })

export default rootReducer