import React from 'react'
import Mylink from './MyLink'
import logo from '../assets/img/logo.png'

export default function Footer() {
  return (
    <footer>
        <div className='footer_container'>
        <div className='footer_box'>
            <img src={logo} alt="" />
            <h1>Artificial Intelligence</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
            <a href="">Company@gmail.com.com</a>
            <a href="">Phone: (064) 332-1233</a>
            <a href="">450 Wall Street, USA, New York</a>
            </div>
            <div className='footer_box'>
              <h1>INFORMATION</h1>
            <Mylink linkText = 'Instagram profile' />
            <Mylink linkText = 'New Collection' />
            <Mylink linkText = 'Contact Us' />
            <Mylink linkText = 'Latest News' />
            <Mylink linkText = 'Terms & Conditions ' />
            </div>
            <div className='footer_box'>
              <h1>FOOTER MENU</h1>
            <Mylink linkText = 'Instagram profile ' />
            <Mylink linkText = 'New Collection' />
            <Mylink linkText = 'Contact Us' />
            <Mylink linkText = 'Latest News' />
            <Mylink linkText = 'Contact' />
            </div>
            <div className='footer_box'>
              <h1>USEFUL LINKS</h1>
            <Mylink linkText = 'Home' />
            <Mylink linkText = 'About' />
            <Mylink linkText = 'Services' />
            <Mylink linkText = 'Blog' />
            <Mylink linkText = 'Contact' />
            </div>
            <div className='footer_box'>
            <h1>ABOUT THE STORE</h1>
            <Mylink linkText = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.' />
            <Mylink linkText = 'About' />
            <Mylink linkText = 'Services' />
            <Mylink linkText = 'Blog' />
            <Mylink linkText = 'Contact' />
            </div>








        </div>

    </footer>
  )
}
