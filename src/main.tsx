import React from "react";
import ReactDOM from "react-dom/client";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import ItemLayout from "./layouts/ItemLayout";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./styles/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/item/:itemId",
    element: <ItemLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
