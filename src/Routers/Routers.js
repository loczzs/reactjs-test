import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import BodyRecord from '../pages/BodyRecord'
import Recommendz from '../pages/Recommendz'
// import Market from "../pages/Market"
// import Create from "../pages/Create"
// import Contact from "../pages/Contact"
// import EditProfile from "../pages/EditProfile"
// import NftDetails from "../pages/NftDetails"
// import SellerProfile from "../pages/SellerProfile"
// import Wallet from "../pages/Wallet"
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/record' element={<BodyRecord/>}/>
      <Route path='/recommend' element={<Recommendz/>}/>
      {/* <Route path='/market' element={<Market/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/contact' element={<Contact/>}/>
    
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/market/:id' element={<NftDetails/>}/> */}
    </Routes>
  )
}

export default Routers