import React from 'react'
import Mylink from './MyLink'
import logo from '../assets/img/logo.png'


export default function Navbar() {
  return (
    <nav>
        <div className='navigation'>
        <div className='logo'>
            <img src={logo} alt="" />
            <h1 className='nav-title'>Artificial Intelligence</h1>
        </div>
        <div className='links'>
            <Mylink linkText = 'Home' />
            <Mylink linkText = 'About' />
            <Mylink linkText = 'Services' />
            <Mylink linkText = 'Blog' />
            <Mylink linkText = 'Contact' />
            </div>
<div>
    <button className='navbtn'>Sign In</button>
</div>
        </div>

</nav>
  )
}
