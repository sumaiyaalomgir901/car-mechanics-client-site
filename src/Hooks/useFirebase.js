import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseInitialize from "../Firebase/Firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        userProfile();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const userProfile = (e) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setUser([]);
        console.log("sign out successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const getName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  return {
    user,
    name,
    email,
    password,
    error,
    handleGoogleSignIn,
    handleRegister,
    handleLogin,
    handleLogOut,
    getName,
    getEmail,
    getPassword,
  };
};

export default useFirebase;
