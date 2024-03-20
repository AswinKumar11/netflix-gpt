import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./moviesListSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        movies:moviesListSlice
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
      }),
});
export default appStore