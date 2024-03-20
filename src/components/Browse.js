import { Header } from "./Header";
import useMoviesApi from "../utils/customHooks/useMoviesApi.js";
import Preview from "./Preview.js";
import MovieDetails from "./MovieDetails.js";

const Browse = () => {
  useMoviesApi();
  return (
    <div className="bg-black">
      <Header />
      <MovieDetails />
      <Preview />
    </div>
  );
};

export default Browse;
