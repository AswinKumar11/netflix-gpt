import React from "react";
import { POSTERURL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterUrl,movieId }) => {
  return (
    <div className="w-44 pr-4">
      <Link to={"/browse/"+movieId}>
      <img src={POSTERURL + posterUrl} alt="MovieCard" />
      </Link>
    </div>
  );
};

export default MovieCard;
