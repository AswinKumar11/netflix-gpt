import { useEffect } from "react";
import { OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addWatchMovie } from "../moviesListSlice";

const useWatchMovieApi = (props)=>{
    const id = props;
    const dispatch = useDispatch();
    async function previewMovie (id){
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, OPTIONS);
        const json = await data.json();
        const trailer = json?.results?.filter(e=> e.type === "Trailer");
        // console.log(json);
        dispatch(addWatchMovie(trailer));
      };
      useEffect(()=>{
        previewMovie(id);
      },[])
}

export default useWatchMovieApi;