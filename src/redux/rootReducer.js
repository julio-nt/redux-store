import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from './cart/slice'
import userReducer from './user/slice'

const rootReducer = combineReducers({ cartReducer, userReducer })

export default rootReducer