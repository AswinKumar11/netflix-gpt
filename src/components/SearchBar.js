import React, { useRef } from "react";
import { chatGptApi } from "../utils/customHooks/useGptSearchApi";

const SearchBar = () => {
  const searchText = useRef(null);
  const setPromptMessage = () => {
    const chatGPTPromptMessage = `Act as a movie recommendation system and give me ${searchText.current.value}. Only give me 5 movies, comma seprated like the example given ahead Example result: movie1, movie2, movie 3, movie4 as a single string`;
    chatGptApi(chatGPTPromptMessage);
  };
  return (
    <div>
      <form className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          type="input"
          className="m-2 p-2 w-80 rounded-lg"
          ref={searchText}
        ></input>
        <button
          className="my-2 mx-4 py-2 px-4 text-white font-bold rounded-lg bg-red-600 w-20"
          onClick={setPromptMessage}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
