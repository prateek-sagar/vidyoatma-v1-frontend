import React from "react";
import "./css/App.css";

import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes.jsx";
export default function App() {
  return <RouterProvider router={Routes}></RouterProvider>;
}
