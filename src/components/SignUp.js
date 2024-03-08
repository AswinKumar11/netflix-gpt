import React, { useState } from "react";
import netflixLogo from "../utils/netflixLogo.png";
import { useRef } from "react";
import { regexValidationEmailForSignUp } from "../utils/validateSignIn";
import { Link } from "react-router-dom";

const SignUp = () => {
  const emailId = useRef(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [isRouteValid, setIsRouteValid] = useState(false);
  const regexValidationEmailFn = () => {
    setIsValidEmail(regexValidationEmailForSignUp(emailId.current.value));
    if (isValidEmail == null) {
      setIsRouteValid(true);
      localStorage.setItem("emailId", emailId.current.value);
    }
  };
  return (
    <div>
      <img
        src={netflixLogo}
        alt="logo"
        className="w-56 p-8 absolute bg-gradient-to-b from-black z-10"
      />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="backgroundimage"
      />
      <div className="relative flex flex-col justify-center items-center h-screen">
        <h1 className="text-5xl text-white font-extrabold m-1 p-1">
          Unlimited movies, TV
        </h1>
        <h1 className="text-5xl text-white font-extrabold m-1 p-1">
          shows and more
        </h1>
        <h1 className="text-xl text-white font-extrabold m-1 p-1">
          Starts at ₹149. Cancel anytime.
        </h1>
        <p className="text-l text-white font-semibold pt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="pl-[20%] w-10/12">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-6/12 p-4 m-2 bg-gray-700 rounded-lg text-white"
            ref={emailId}
          ></input>
          <Link to={isRouteValid ? "/signUp/setUp" : "/signUp"}>
            <button
              className="bg-red-600 p-4 m-2 w-2/12 rounded-lg text-white font-bold"
              onClick={regexValidationEmailFn}
            >
              {"Get Started  >"}
            </button>
          </Link>
          <p className="text-orange-500 pl-2">{isValidEmail}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
