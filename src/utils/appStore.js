import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./moviesListSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesListSlice,
        gpt:gptSlice
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
      }),
});
export default appStore