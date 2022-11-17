import React from 'react'
import secondbg from '../assets/img/secondbg.png'
import hero1 from '../assets/img/hero1.png'
import hero2 from '../assets/img/hero2.png'
import hero3 from '../assets/img/hero3.png'
import hero4 from '../assets/img/hero4.png'
import hero5 from '../assets/img/hero5.png'


export default function HeroSection() {
  return (
    <section>
      <div className='herosection_container'>
        <div className='herosection_image'>
          <img className='hero_img' src={secondbg} alt="" />
        </div>
        <div className='herosection_text'>
        <h1 className='hero_h1'>Apply AI, Deep Learning and Data Sciece to solve</h1>
        <p className='hero_p'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button className='hero_btn'>Learn More</button>
        </div>

      </div>

  <div className='block'>


  <div className='box'>
    <img className='box1' src={hero1} alt="" />
    <h1>Business Prespective Global Agency Awards</h1>
    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className='box'>
    <img className='heropic' src={hero2} alt="" />
    <h1>Business Prespective Global Agency Awards</h1>
    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className='box'>
    <img className='heropic' src={hero3} alt="" />
    <h1>Value for Results in Global Agency Awards</h1>
    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className='box'>
    <img className='heropic' src={hero4} alt="" />
    <h1>Global Experience in Agency Awards</h1>
    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>
  <div className='box'>
    <img className='heropic' src={hero5} alt="" />
    <h1>Expert Prespective Agency Awards</h1>
    <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
  </div>

</div>
    </section>
  )
}
