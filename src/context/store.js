'use client'
import React, { useEffect } from "react";
import { getCookie } from "cookies-next";
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: getCookie("uid") || null,
    role: getCookie("role") || null,
  });

  useEffect(() => {
    // Monitor changes in cookies and update context if necessary
    const handleCookieChange = () => {
      const newUid = getCookie("uid") || null;
      const newRole = getCookie("role") || null;

      if (newUid !== user.uid || newRole !== user.role) {
        setUser({ uid: newUid, role: newRole });
      }
    };

    // Add event listener to detect changes in cookies
    window.addEventListener("storage", handleCookieChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleCookieChange);
    };
  }, [user.uid, user.role]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(AuthContext);
};


