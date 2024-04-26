import { useSelector } from "react-redux";
import { POSTERURL } from "../utils/constants";

const MovieDetails = () => {
  const previewMovieData = useSelector((store) => store?.movies?.moviesList);
  if (typeof previewMovieData == "undefined") return;
  const { title, overview, backdrop_path } = previewMovieData?.[0];
  return (
    <div className="mt-[15%] p-4 absolute z-20 text-gray-400 w-4/12 m-4">
      <h1 className="font-extrabold text-4xl hover:text-5xl text-white">{title}</h1>
      <img
        className="w-52 hover:w-60"
        src={POSTERURL+backdrop_path}
        alt="logo"
      />
      <p className="font-thin hover:font-semibold text-lg cursor-default">{overview}</p>
    </div>
  );
};

export default MovieDetails;
