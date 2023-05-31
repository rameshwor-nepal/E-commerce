import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AddToCartState } from "./context/addToCartContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AddToCartState >
    <App />
  </AddToCartState >
  </BrowserRouter>
);
