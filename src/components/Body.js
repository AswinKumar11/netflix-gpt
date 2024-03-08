import React from 'react';
import netflixLogo from "../utils/netflixLogo.png";
import Login from './Login';

const Body = () => {
  return (
    <div>
        <img src={netflixLogo} alt="logo" className="w-56 p-8 absolute bg-gradient-to-b from-black z-10"/>
        <img  className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='backgroundimage' />
        <Login /> 
    </div>
  )
}

export default Body