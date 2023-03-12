import React from 'react'
import img from './v3.png'

function Header() {
  return (
   <>
   <header className="header">
  <a href="#" className="logo"><img src={img} alt="" /></a>
  <nav className="navbar">
    <a href="#home" className="active">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
    </nav> 
    <div className="container" id="darkMode-icon">
  <input id="checkbox" name="checkbox" type="checkbox" />
  <label className="label" htmlFor="checkbox">
  </label>
</div>
  </header>




   
   </>
  )
}

export default Header