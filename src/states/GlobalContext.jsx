import { createContext, useState } from "react";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const values = {}; // store the values that need to bee passed down to other components

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
