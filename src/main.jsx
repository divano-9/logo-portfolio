import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import App from "./App.jsx";
import GlobalContext from "./states/GlobalContext.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "../src/style/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
