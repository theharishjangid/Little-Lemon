import React from 'react'
import './hero.css'
import Pic from '../assets/restauranfood.jpg'
import {PrimaryButton} from '../components'

const Hero = () => {
  return (
    <div className='hero'>
        <div class='hero-text'>
            <div className='hero-title'>Little Lemons</div>
            <div className='hero-subtitle'>Chicago</div>
            <div className='hero-desc'>Little Lemons Restaurant is a cozy culinary haven nestled in the heart of Chicago, offering a delightful fusion of fresh flavors and warm ambiance. </div>
            <PrimaryButton name="Reserve A Table" />
        </div>
        <img src={Pic} alt="hero" className='hero-img' />
    </div>
  )
}

export default Hero