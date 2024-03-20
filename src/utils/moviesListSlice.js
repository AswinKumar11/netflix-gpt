import { createSlice } from "@reduxjs/toolkit";

const moviesData = createSlice({
    name:"moviesData",
    initialState:{},
    reducers:{
        addMoviesList:(state,action)=>{
            state.moviesList = action.payload;
            return;
        },
        addPreviewMovie:(state,action)=>{
            state.previewMovie = action.payload;
            return
        }
    }
});
export const {addMoviesList,addPreviewMovie} = moviesData.actions
export default moviesData.reducer