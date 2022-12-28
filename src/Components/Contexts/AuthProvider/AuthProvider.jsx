import React, { createContext, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = (provider) => {
    // setLoading(false);
    return signInWithPopup(auth, provider);
  };

  const createUser =  (email, password) => {
    // setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    // console.log(currentUser);
    setUser(currentUser);
    setLoading(true);

    return () => {
      unsubscribe();
    };
  });

  const authInfo = { signInWithGoogle, createUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
