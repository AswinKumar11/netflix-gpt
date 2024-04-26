import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const nowPlayingMovieList = useSelector((store) => store?.movies?.moviesList);
  const popularMoviesList = useSelector((store) => store?.movies?.popularMovies);
  const upcomingMoviesList = useSelector((store) => store?.movies?.upcomingMovies);
  const topRatedMoviesList = useSelector((store) => store?.movies?.topRatedMovies);
  return (
    <div className="bg-black p-4">
      <div className="relative -mt-56">
        <h1 className="text-2xl font-bold text-white pb-2">Now Playing</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {nowPlayingMovieList?.map((e) => {
              return <MovieCard posterUrl={e.poster_path} movieId = {e.id} key={e.id} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white py-2">Popular</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {popularMoviesList?.map((e) => {
              return <MovieCard posterUrl={e.poster_path} movieId = {e.id} key={e.id} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white py-2">Top Rated</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {topRatedMoviesList?.map((e) => {
              return <MovieCard posterUrl={e.poster_path} movieId = {e.id} key={e.id} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white py-2">Upcoming</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {upcomingMoviesList?.map((e) => {
              return <MovieCard posterUrl={e.poster_path} movieId = {e.id} key={e.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
