import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSlice",
    initialState:{
        isSearchPage:false
    },
    reducers:{
        isSearchPage:(state,action)=>{
            state.isSearchPage = action.payload;
        }
    }
});
export const {isSearchPage} = gptSlice.actions;
export default gptSlice.reducer;