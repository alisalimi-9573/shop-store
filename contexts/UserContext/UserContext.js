import React, { createContext, useState } from "react";

export const userContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  console.log("user data", userData);

  const login = (myUserData) => {
    localStorage.setItem("user", myUserData.email);
    setUserData(myUserData);
  };

  return (
    <userContext.Provider value={{ login, userData }}>
      {children}
    </userContext.Provider>
  );
}
//
