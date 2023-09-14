import { combineReducers } from "redux";
import userSlice from "../slices/user"
export const rootReduer = combineReducers({
 
    user:userSlice
})

