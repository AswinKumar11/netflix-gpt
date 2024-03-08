import React,{useRef, useState} from "react";
import { regexValidation } from "../utils/validateSignIn";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const regexValidationFn = ()=>{
        setErrorMsg(regexValidation(email.current.value,password.current.value));
        if(errorMsg !== null) return;
        signInWithEmailAndPassword(auth,email.current.value,password.current.value).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg("Invalid email or Password");
        });
    }
  return (
      <div className="relative flex justify-center items-center h-screen">
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="backgroundimage" />
        <div className="absolute bg-black p-4 w-3/12 bg-opacity-80 rounded-lg text-white">
        <form onSubmit={(e)=>e.preventDefault()}>
          <h1 className="text-red-700 text-3xl m-2 p-2">Sign In</h1>
          <input
          ref={email}
            type="input"
            placeholder="Enter your Email"
            title="Email"
            className=" border border-black 2px p-2 m-2 w-full rounded-lg bg-gray-700"
          />
          <input
          ref={password}
            type="password"
            placeholder="Enter your password"
            className=" border border-black 2px p-2 m-2 w-full rounded-lg bg-gray-700"
          />
          <p className="text-orange-500 m-2 p-2">{errorMsg}</p>
          <button className="bg-red-700 p-2 m-2 w-full rounded-lg" onClick={regexValidationFn}>Submit</button>
        </form>
        <Link to="/signUp"><p className="text-gray-700 m-2 p-2 cursor-pointer">New to Netflix? Sign up now.</p></Link>
        </div>
      </div>
  );
};

export default Login;
