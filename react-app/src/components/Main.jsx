import React from 'react'
import mainbg from '../assets/img/mainbg.png'
import gr1 from '../assets/img/gr1.png'
import gr2 from '../assets/img/gr2.png'
import gr3 from '../assets/img/gr3.png'
import gr4 from '../assets/img/gr4.png'






export default function Main() {
  return (
    <main>
      <div className='main-container'>
      <div className='main-1block'>
        <h3 className='main_title'>Next genaretion platform</h3>
        <h1 className='main_name'>Artificial intelligence & Syber security</h1>
        <p className='main_text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <div className='main_buttons'>
          <button className='main_btn'>Get Started</button>
          <button className='main_btn'>Watch Video</button>
        </div>
      </div>

      <div className='main-2block'>
        <img src={mainbg} alt="" />
      </div>

      </div>

      <div className='main-3block'>
        <img src={gr1} alt="" />
        <img src={gr2} alt="" />
        <img src={gr3} alt="" />
        <img src={gr4} alt="" />
      </div>

    </main>

  )
}
