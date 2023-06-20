import React, { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (name, photoUrl) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("on state change", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    });
  
    const authInfo = {
      user,
      loading,
      setLoading,
      providerLogin,
      createUser,
      login,
      updateUserProfile,
      logOut,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;