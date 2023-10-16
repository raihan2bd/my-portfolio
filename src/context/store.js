"use client";
import React, { useEffect } from "react";
import { getCookie } from "cookies-next";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

const getUser = () => {
  const uid = getCookie('uid') || null;
  const role = getCookie('role') || null;

  return {uid, role}
}

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: null,
    role: null,
    isAuthFetched: false,
  });

  const newUser = getUser()

  const dispatchAuth = () => {
    setUser((prevState) => {
      return {
        ...prevState,
        ...getUser(),
        isAuthFetched: true
      }
    })
  }

  useEffect(() => {
    if ((newUser.uid !== user.uid || newUser.role !== user.role)) {
      setUser({ uid: newUser.uid, role: newUser.role, isAuthFetched: true });
    } else if(user.isAuthFetched === false) {
      setUser((prevState) => ({...prevState, isAuthFetched: true}))
    }
  }, [newUser]);

  return (
    <AuthContext.Provider value={{ user, dispatchAuth }}>{children}</AuthContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AuthContext);
};
