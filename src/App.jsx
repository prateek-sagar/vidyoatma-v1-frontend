import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./layouts/DashboardHome";
import Public from "./wrapper/Public";
import { UserProvider } from "./components/UserContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="h-auto block">
      <UserProvider>
        <RouterProvider router={routes}></RouterProvider>
      </UserProvider>
    </div>
  );
}
