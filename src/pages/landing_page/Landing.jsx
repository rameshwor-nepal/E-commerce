

import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Lower_navbar from './Lower_navbar'
import Hero_section from './Hero_section'
import Shop from './Shop'
import Shop_near_you from './Shop_near_you'
import Banner from './Banner'
import Featured_products from './Featured_products'
import Just_for_you from './Just_for_you'
import Services from './Services'
import Footer from './Footer'



  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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


  </React.StrictMode>,
)

export default landing_page


