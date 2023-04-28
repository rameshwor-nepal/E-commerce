
import Lower_navbar from "../../components/LowerNavbar";
import ShippingAddress from "../../components/ShippingAddress";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

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