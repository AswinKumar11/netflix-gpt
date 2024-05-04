import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import netflixLogo from "../utils/netflixLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { isSearchPage } from "../utils/gptSlice";

export const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((appStore) => appStore?.user?.userId);
  const searchPageToggle = useSelector((appStore) => appStore?.gpt?.isSearchPage);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, accessToken, metadata } = user;
        dispatch(
          addUser({
            userId: uid,
            email: email,
            accessToken: accessToken,
            metadata: metadata,
          })
        );
        // navigate("/browse");
        // const uid = user.uid;?
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const signOutTheUser = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const signInPage = () => {
    console.log("aswin");
  };
  const onClickSearch = () => {
    console.log(searchPageToggle);
    dispatch(isSearchPage(!searchPageToggle));
  };
  if (props.loginPage) {
    return (
      <div className="w-full py-4 flex absolute bg-gradient-to-b from-black z-10">
        <a href="/">
          <img
            src={netflixLogo}
            alt="logo"
            className="w-56 px-2 cursor-pointer"
          />
        </a>
      </div>
    );
  }
  return (
    <div className="w-full py-4 flex justify-between absolute bg-gradient-to-b from-black z-10">
      <a href="/browse">
        <img
          src={netflixLogo}
          alt="logo"
          className="w-56 px-2 cursor-pointer"
        />
      </a>
      <div className="flex items-center px-8">
        <button
          className="m-4 py-2 px-3 bg-blue-500 text-white rounded-lg cursor-pointer font-bold"
          onClick={onClickSearch}
        >
          {searchPageToggle ? "Home" : "Search"}
        </button>
        <button
          className="text-lg font-bold text-white cursor-pointer bg-red-700 rounded-lg py-2 px-3"
          onClick={
            typeof userData !== "undefined" ? signOutTheUser : signInPage
          }
        >
          {typeof userData !== "undefined" ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};
