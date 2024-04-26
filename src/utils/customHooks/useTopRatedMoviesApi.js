import { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../moviesListSlice";

const useTopRatedMoviesApi = () => {
  const dispatch = useDispatch();
  async function topRatedMovieListApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  }
  useEffect(() => {
    topRatedMovieListApi();
  }, []);
};
export default useTopRatedMoviesApi;
