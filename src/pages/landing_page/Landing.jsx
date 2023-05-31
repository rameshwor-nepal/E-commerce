import Nav from "../../components/Nav";
import Lower_navbar from "../../components/LowerNavbar";
import Hero_section from "../../components/HeroSection";
import Shop from "../../components/Shop";
import Shop_near_you from "../../components/Shop_near_you";
import Banner from "../../components/Banner";
import Featured_products from "../../components/FeaturedProducts";
import Just_for_you from "../../components/JustForYou";
import Services from "../../components/Services";
import Footer from "../../components/Footer";
import { useState } from "react";

function landing_page() {

  // const [cart, setCart ] = useState([])

  // const addToCart = (data) =>{
  //   setCart ([...cart, data])
  // }
  return (
    <>
    
      <Nav />
      <Lower_navbar />
      <Hero_section />
      <Shop />
      <Shop_near_you />
      <Banner />
      <Featured_products />
      <Just_for_you />
      <Services />
      <Footer />

    </>
  );
}

export default landing_page;
