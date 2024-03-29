import React from "react";
import Detail_page from "./pages/product_detail_page/Detail_page";
import BuyerSignIn from "./pages/BuyerSignIn/BuyerSignin_page";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage"
import Landing_page from "./pages/landing_page/Landing";
import MyCartPage from './pages/myCartPage/MyCartPage'
import { Route, Routes } from "react-router-dom";
import Wishlist from "./pages/wishlistPage/Wishlist";
import SellerSignIn from "./pages/sellerSignIn/SellerSignIn";
import LogIn from "./pages/login_page/LogIn";
import ForgetPassword from "./pages/forget_password/ForgetPassword";
import DetailPageShop from "./pages/detailPageShop/DetailPageShop";

const App = () => {
  return (

    <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/shop-detail/:id" element = { <DetailPageShop />} />
        <Route path="/detail-page/:id" element={<Detail_page />} />      
        <Route path="/mycart/checkout" element = {<CheckOutPage />} />
        <Route path="/mycart" element = {<MyCartPage />} />
        <Route path="/wishlist" element = {<Wishlist />} />
        <Route path="/buyer-sign-in" element={<BuyerSignIn />} />
        <Route path="/seller-sign-in" element={<SellerSignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>

  );
};

export default App;
