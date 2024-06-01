import Home from "../pages/Home.jsx";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
const Private = lazy(() => import("../wrapper/Private.jsx"));
const DashboardHome = lazy(() => import("../layouts/DashboardHome"));
import Public from "../wrapper/Public";

export const Routes = createBrowserRouter([
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
    element: <Private />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
    ],
  },
]);
