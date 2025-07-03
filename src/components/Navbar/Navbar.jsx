import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const [menu,SetMenu]=useState("Home")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
<ul className="navbar-menu">
  <li onClick={()=>SetMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
  <li onClick={()=>SetMenu("Menu")}className={menu==="Menu"?"active":""}>Menu</li>
  <li onClick={()=>SetMenu("Mobile-App")}className={menu==="Mobile-App"?"active":""}>Mobile App</li>
  <li onClick={()=>SetMenu("Contact-Us")}className={menu==="Contact-Us"?"active":""}>Contact Us</li>
</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt="" />
  <div className="navbar-search-icon">
    <img src={assets.basket_icon} alt="" />
    <div className="dot"></div>
  </div>
  <button>Sign in</button>
</div>
    </div>
  )
}

export default Navbar