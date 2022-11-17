import React from 'react'
import aboutbg from '../assets/img/aboutbg.png'
export default function About() {
  return (
    <about>
        <div className='about'>
        <div className='about_container'>
            <div className='about-title'>
                <div><h1 className='about_h1'>What our clients say about our awesome solutions</h1></div>
                <div><p className='about_p'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</p></div>
                <div><p className='about_p'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p></div>
                <div><p className='about_p'>Lorem ipsum is placeholder previewing layouts and visual mockups.</p></div>
                <div><p className='about_p'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p></div>
            </div>
        <div className='about_pic'>
            <img src={aboutbg} alt="" />
        </div>

        </div>
        </div>

    </about>
  )
}
