"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children, initialUserData }) => {
  const [user, setUser] = useState(initialUserData);

  const setUserData = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
