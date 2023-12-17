import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "./HomePage";
import AuthPage from "../pages/AuthPage";
import Profile from "./Profile";
import BikesGrid from "./BikesGrid";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/sign-up", element: <AuthPage /> },
      { path: "/profile", element: <Profile /> },
      { path: "/bikes-grid", element: <BikesGrid /> },
    ],
  },
]);
