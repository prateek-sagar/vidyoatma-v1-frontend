import React from "react";
import "./css/App.css";

import { UserProvider } from "./components/UserContext";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes.jsx";

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </UserProvider>
  );
}
