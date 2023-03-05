import Nav from "../landing_page/Nav";
import Lower_navbar from "../landing_page/Lower_navbar";
import ShippingAddress from "./ShippingAddress";
import Footer from "../landing_page/Footer";

function landing_page() {
  return (
    <>
      <Nav />
      <Lower_navbar />
      <ShippingAddress />
      <Footer />
    </>
  );
}

export default landing_page;