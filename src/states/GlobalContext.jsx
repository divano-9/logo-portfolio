import { createContext, useState } from "react";

export const Context = createContext(); // import {Context}, then useContext(Context)

const GlobalContext = ({ children }) => {
  const [fbSrc, setFbSrc] = useState("src/assets/img/nav/icons/fb-empty.png");
  const [liSrc, setLiSrc] = useState(
    "src/assets/img/nav/icons/linked-empty.png"
  );

  const values = {
    fbSrc,
    setFbSrc,
    liSrc,
    setLiSrc,
  }; // store the values that need to bee passed down to other components

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GlobalContext; // wrap the whole app with <GlobalContext> <GlobalContext />
