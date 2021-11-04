import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setuser] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //sign in
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };
  //special observer whether user state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      }
    });
  }, []);

  // log out
  const logOut = () => {
    signOut(auth).then(() => {
      setuser({});
    });
  };
  return { user, googleSignin, logOut };
};

export default useFirebase;
