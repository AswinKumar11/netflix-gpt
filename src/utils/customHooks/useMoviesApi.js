import { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addMoviesList, addPreviewMovie } from "../moviesListSlice";

const useMoviesApi = () => {
  const dispatch = useDispatch();
  async function previewMovie (preview){
    const id = preview.id;
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, OPTIONS);
    const json = await data.json();
    const trailer = json.results.filter(e=> e.type === "Trailer");
    dispatch(addPreviewMovie(trailer));
  }
  async function movieListApi() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
    previewMovie(json.results[0])
    dispatch(addMoviesList(json.results));
  }
  useEffect(() => {
    movieListApi();
  }, []);
};
export default useMoviesApi;
