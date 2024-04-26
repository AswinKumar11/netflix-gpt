import React from "react";
// import { useSelector } from "react-redux";

const Preview = ({viewMovie,previewVideoKey}) => {
  // const movieTrailer = useSelector((store)=>store.movies.previewMovie);
  // const previewVideoKey = movieTrailer?.[0]?.key;
  // const previewVideoKey = props.previewVideoKey;

  if (viewMovie === true) {
    return (
      <div className="aspect-video bg-black">
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/${previewVideoKey}?si=daA1W7TWS59wtI0Z`}
          title="YouTube video player"
        ></iframe>
      </div>
    );
  }
  return (
    <div className="aspect-video bg-black">
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${previewVideoKey}?si=SJ4UyrtFKsu-cfzW?rel=0&amp;controls=0&autoplay=1&mute=1&loop=1&playlist=${previewVideoKey}`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Preview;
