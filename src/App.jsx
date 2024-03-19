import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './pages/home'
import Cart from './pages/cart'
import Profile from './pages/profile'
import Faq from './pages/Faq'
import "./style.css"


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/FAQ" element={<Faq/>}></Route>
    </Routes>
    </>
  )
}

export default App