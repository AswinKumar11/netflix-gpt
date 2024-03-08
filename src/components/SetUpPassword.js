import React, { useRef, useState } from "react";
import netflixLogo from "../utils/netflixLogo.png";
import { Link } from "react-router-dom";
import { regexValidationPasswordForSignUp } from "../utils/validateSignIn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const SetUpPassword = () => {
  const [validationMsg, setValidationMsg] = useState(null);
  const emailIdForSignUp = localStorage.getItem('emailId');
  console.log(emailIdForSignUp);
  const regexValidationPasswordFn = () => {
    if (password.current.value === confirmPassword.current.value) {
      setValidationMsg(
        regexValidationPasswordForSignUp(password.current.value)
      );
      createUserWithEmailAndPassword(auth, emailIdForSignUp, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+errorMessage);
          // ..
        });
    } else if (password.current.value !== confirmPassword.current.value){
      setValidationMsg("Both fields doesnot match");
    }
  };
  const password = useRef(null);
  const confirmPassword = useRef(null);
  return (
    <>
      <div className="w-full py-4 flex justify-between border border-gray-300 border-2px shadow-lg">
        <a href="/">
          <img src={netflixLogo} alt="logo" className="w-56 px-2" />
        </a>
        <Link to="/" className="flex items-center text-lg px-8">
          <p>Sign In</p>
        </Link>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center h-screen"
      >
        <h1 className="text-xl text-gray-500 font-extrabold m-1 p-3">
          Create a password to start your membership
        </h1>
        <input
          type="password"
          placeholder="enter your password"
          className="m-2 p-2 border border-gray-500 border-1 w-4/12 rounded-lg"
          ref={password}
        ></input>
        <input
          type="password"
          placeholder="Confirm your password"
          className="m-2 p-2 border border-gray-500 border-1 w-4/12 rounded-lg"
          ref={confirmPassword}
        ></input>
        <button
          className="bg-red-700 p-2 m-2 rounded-lg w-4/12"
          onClick={regexValidationPasswordFn}
        >
          Submit
        </button>
        <p className="text-orange-500 pl-2">{validationMsg}</p>
      </form>
    </>
  );
};

export default SetUpPassword;
