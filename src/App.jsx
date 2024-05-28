import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./layouts/DashboardHome";
import Public from "./wrapper/Public";

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
    <RouterProvider router={routes}></RouterProvider>
    // <Router>
    //   <Routes>
    //     <Route element={<Home />} path="" exact />
    //     <Route element={<Login />} path="/login" />
    //     <Route element={<SignUp />} path="/signup" />
    //     <Route element={<ProtectiveRoutes path="/dashboard" />} />
    //   </Routes>
    // </Router>
  );
}
