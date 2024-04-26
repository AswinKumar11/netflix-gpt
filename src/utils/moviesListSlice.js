import { createSlice } from "@reduxjs/toolkit";

const moviesData = createSlice({
  name: "moviesData",
  initialState: {},
  reducers: {
    addMoviesList: (state, action) => {
      state.moviesList = action.payload;
      return;
    },
    addPreviewMovie: (state, action) => {
      state.previewMovie = action.payload;
      return;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
      return;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
      return;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
      return;
    },
    addWatchMovie: (state, action) => {
      state.watchMovie = action.payload;
      return;
    },
  },
});
export const {
  addMoviesList,
  addPreviewMovie,
  addWatchMovie,
  addPopularMovie,
  addUpcomingMovie,
  addTopRatedMovie
} = moviesData.actions;
export default moviesData.reducer;
