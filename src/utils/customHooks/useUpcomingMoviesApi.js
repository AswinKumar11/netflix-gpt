import { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../moviesListSlice";

const useUpcomingMoviesApi = () => {
  const dispatch = useDispatch();
  async function upcomingMovieListApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  }
  useEffect(() => {
    upcomingMovieListApi();
  }, []);
};
export default useUpcomingMoviesApi;
