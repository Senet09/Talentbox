import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:JSON.parse(localStorage.getItem("signin-token")) || null
}
const userSlice = createSlice({
name:"user",
initialState,
reducers:{
    setToken(state,value){
        localStorage.setItem("signin-token",JSON.stringify(value.payload));
        state.token = value.payload;
    }
}
})

export const {setToken} = userSlice.actions;

export default userSlice.reducer;