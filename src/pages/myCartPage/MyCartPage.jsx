import React, { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import MyCart from '../../components/MyCart'

const MyCartPage = () => {

  return (
    
    <>
        <Nav />
        <MyCart cart={cart} addToCart ={addToCart} />
        <Footer />
    </>
  )
}

export default MyCartPage