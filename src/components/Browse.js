import { Header } from "./Header";
import useMoviesApi from "../utils/customHooks/useMoviesApi.js";
import Preview from "./Preview.js";
import MovieDetails from "./MovieDetails.js";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.js";
import usePopularMoviesApi from "../utils/customHooks/usePopularMoviesApi.js";
import useUpcomingMoviesApi from "../utils/customHooks/useUpcomingMoviesApi.js";
import useTopRatedMoviesApi from "../utils/customHooks/useTopRatedMoviesApi.js";
import SearchPage from "./SearchPage.js";

const Browse = () => {
  useMoviesApi();
  usePopularMoviesApi();
  useUpcomingMoviesApi();
  useTopRatedMoviesApi();
  const movieTrailer = useSelector((store) => store.movies.previewMovie);
  const searchPageToggle = useSelector((appStore) => appStore?.gpt?.isSearchPage);
  const previewVideoKey = movieTrailer?.[0]?.key;
  return (
    <div>
      <Header />
      {searchPageToggle ? (
        <SearchPage />
      ) : (
        <>
          <MovieDetails />
          <Preview previewVideoKey={previewVideoKey} />
          <MovieList />
        </>
      )}
    </div>
  );
};

export default Browse;
