import React from "react";
import useWatchMovieApi from "../utils/customHooks/useWatchMovieApi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Preview from "./Preview";

const MoviePage = () => {
  const { id } = useParams();
  useWatchMovieApi(id);
  const watchMovieData = useSelector((store)=>store.movies.watchMovie);
  const previewVideoKey = watchMovieData?.[0]?.key
  return <div>
    <Preview previewVideoKey={previewVideoKey} viewMovie={true}/>
  </div>;
};

export default MoviePage;
