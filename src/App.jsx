import React from "react";
import "./App.css";
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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "login",
        element: <Login />,
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
