import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "../landing_page/Nav";
import Footer from "../landing_page/Footer";
import Seller_signin from "./Seller_signin";
import Buyer_signin from "./Buyer_signin";
import Login from "./Login";
import Forget_password from "./Forget_password";

function Signin_page() {
  return (
    <>
      <Nav />
      <Seller_signin />
      <Buyer_signin />
      <Login />
      <Forget_password />
      <Footer />
    </>
  );
}

export default Signin_page;
