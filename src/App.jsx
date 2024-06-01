import React from "react";
import "./css/App.css";

import { UserProvider } from "./components/UserContext";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes.jsx";
import { FeatureProvider } from "./components/FeaturesContext.jsx";

export default function App() {
  return (
    <UserProvider>
      <FeatureProvider>
        <RouterProvider router={Routes}></RouterProvider>
      </FeatureProvider>
    </UserProvider>
  );
}
