import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Buyer_signin from "../../components/BuyerSignin";


function BuyerSignin_page() {
  return (
    <>
      <Nav />
      <Buyer_signin />
      <Footer />
    </>
  );
}

export default BuyerSignin_page;
