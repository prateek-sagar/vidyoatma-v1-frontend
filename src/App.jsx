import React from "react";
import "./css/App.css";

import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes.jsx";
import { FeatureProvider } from "./sharedcomponents/FeaturesContext.jsx";
export default function App() {
  return (
    <FeatureProvider>
      <RouterProvider router={Routes}></RouterProvider>
    </FeatureProvider>
  );
}
