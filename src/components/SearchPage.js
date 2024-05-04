import React from "react";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <div className="relative flex justify-center">
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="backgroundimage"
      />
      <div className="mt-[10%] p-2 flex relative z-10 bg-black justify-between rounded-lg">
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchPage;
