import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const UserContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext.Provider value={"RaOne"}>
    <App />
  </UserContext.Provider>
);
