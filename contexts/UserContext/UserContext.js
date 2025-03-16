import React, { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

export const userContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("context state", state);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const existingUser = initialState.userData.find(
        (user) => user.id === userId
      );
      if (existingUser) {
        dispatch({
          type: "login_user",
          payload: existingUser,
        });
      }
    }
  }, []);

  const signUp = (user) => {
    dispatch({
      type: "sign_up_user",
      payload: user,
    });
  };

  const login = (user) => {
    dispatch({
      type: "login_user",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: "logout_user",
    });
  };

  const addSelectedItemsToCarts = (carts) => {
    dispatch({
      type: "add_to_carts",
      payload: carts,
    });
  };

  return (
    <userContext.Provider
      value={{
        login,
        state,
        signUp,
        logout,
        addSelectedItemsToCarts,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
