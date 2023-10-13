"use client";

import { getCookie } from "cookies-next";
import { useState, useContext, createContext } from "react";

const AuthContext = createContext({
  uid: null,
  role: null
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(AuthContext);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
