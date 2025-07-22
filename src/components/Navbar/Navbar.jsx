import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {

  const [menu, SetMenu] = useState("Home")
  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => SetMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => SetMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => SetMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => SetMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar