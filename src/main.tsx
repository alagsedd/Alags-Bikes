import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
