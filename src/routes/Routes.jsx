import Home from "../pages/Home.jsx";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import Private from "../wrapper/Private.jsx";
const DashboardHome = lazy(() => import("../layouts/DashboardHome"));
import Public from "../wrapper/Public";
import FeatureWrapper, {
  loader as featureLoader,
} from "../sharedcomponents/FeatureWrapper.jsx";
import ErrorPage from "../sharedcomponents/ErrorPage.jsx";
import AccountSetting from "../sharedcomponents/AccountSetting.jsx";

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
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: ":feature",
            element: <FeatureWrapper />,
            loader: featureLoader,
          },
          {
            path: "account",
            element: <AccountSetting />,
          },
        ],
      },
    ],
  },
]);
