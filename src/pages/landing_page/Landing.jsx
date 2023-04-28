import Nav from "../../components/Nav";
import Lower_navbar from "../../components/Lower_navbar";
import Hero_section from "../../components/Hero_section";
import Shop from "../../components/Shop";
import Shop_near_you from "../../components/Shop_near_you";
import Banner from "../../components/Banner";
import Featured_products from "../../components/Featured_products";
import Just_for_you from "../../components/Just_for_you";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

function landing_page() {
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
