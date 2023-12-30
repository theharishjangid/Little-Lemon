import React from 'react'
import './about.css'
import image1 from '../assets/Mario and Adrian A.jpg'
import image2 from '../assets/restaurant chef B.jpg'

const About = () => {
  return (
    <div className='about-layout'>
        <div className='title'>About Us</div>
        <div className='content'>
            <div width='40%'>
                <div className='about-title'>Little Lemons</div>
                <div className='about-subtitle'>Chicago</div>
                <div className='about-desc'>Little Lemons Restaurant is a cozy culinary haven nestled in the heart of Chicago, offering a delightful fusion of fresh flavors and warm ambiance. Known for its innovative menu inspired by local ingredients, the restaurant provides a unique dining experience that caters to diverse palates. From savory classics to inventive dishes, Little Lemons aims to tantalize taste buds while creating memorable moments for patrons seeking a harmonious blend of quality cuisine and inviting atmosphere. </div>
            </div>
            <div width='60%'>
                <img src={image1} alt="about1" className='image-1' />
                <img src={image2} alt="about1" className='image-2' />
            </div>
        </div>
    </div>
  )
}

export default About