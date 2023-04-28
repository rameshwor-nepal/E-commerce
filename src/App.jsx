import React from "react";
import Detail_page from "./pages/product_detail_page/Detail_page";
import Signin_page from "./pages/signUp_signIn/Signin_page";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"
import Landing_page from "./pages/landing_page/Landing";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing_page />} />
      <Route path="/detail-page" element={<Detail_page />} />
      <Route path="/sign-in" element={<Signin_page />} />
      <Route path="/checkout" element = {<CheckOutPage />} />
    </Routes>
  );
};

export default App;
