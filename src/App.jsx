import React from 'react'
import DetailPage from './pages/product_detail_page/DetailPage'
import Signin_page from './pages/signUp_signIn/SigninPage'
  

import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing_page/Landing'



const App = () => {
  return (

<Routes>  
  <Route path='/' element={<Landing/>}/>
<Route  path="/detail-page" element={<DetailPage/>}/>
<Route path="/signin-page" element={<Signin_page/>}/>


</Routes>
  )
}

export default App