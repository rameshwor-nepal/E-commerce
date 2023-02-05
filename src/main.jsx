import React from "react";
import ReactDOM from "react-dom/client";
import Detail_page from "./pages/product_detail_page/Detail_page";
import Signin_page from "./pages/signUp_signIn/Signin_page";

import Landing_page from "./pages/landing_page/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing_page />,
  },
  {
    path: "about",
    element: <Detail_page />,
  },
  {
    path: "signin",
    element: <Signin_page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
