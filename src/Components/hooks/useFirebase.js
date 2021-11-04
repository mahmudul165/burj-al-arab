import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";
initializeAuth();
const useFirebase = () => {
  const [user, setuser] = useState({});
  //console.log(user);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // login
  const loginGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setuser(user);
    });
  };
  return { user, loginGoogle };
};

export default useFirebase;
