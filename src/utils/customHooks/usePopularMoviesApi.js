import { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../moviesListSlice";

const usePopularMoviesApi = () => {
  const dispatch = useDispatch();
  async function popularMovieListApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  }
  useEffect(() => {
    popularMovieListApi();
  }, []);
};
export default usePopularMoviesApi;
