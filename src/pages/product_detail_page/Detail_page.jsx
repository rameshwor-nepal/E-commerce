
import React from 'react'
import ReactDOM from 'react-dom/client'
import About_products from './About_products'
import Nav from '../landing_page/Nav'
import Footer from '../landing_page/Footer'
import Reviews from './Reviews'



ReactDOM.createRoot(document.getElementById('leaf')).render(
  <React.StrictMode>
    <Nav />
    <About_products />
    <Reviews />
    <Footer />.

  </React.StrictMode>,
)

export default  Detail_page

