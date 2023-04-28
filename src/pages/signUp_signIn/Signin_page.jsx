import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Seller_signin from "../../components/Seller_signin";
import Buyer_signin from "../../components/Buyer_signin";
import Login from "../../components/Login";
import Forget_password from "../../components/Forget_password";

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
