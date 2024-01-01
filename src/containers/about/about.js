import React from 'react'
import './about.css'
import image1 from '../../assets/Mario and Adrian A.jpg'
import image2 from '../../assets/restaurant chef B.jpg'

const About = () => {
  return (
    <div className='app__about' id='about'>
      <h2>About Us</h2>
      <div className='app__about-container'>
        <div className='app__about-title'>
          <h1>Little Lemons</h1>
          <h3>Chicago</h3>
          <p>Little Lemons Restaurant is a cozy culinary haven nestled in the heart of Chicago, offering a delightful fusion of fresh flavors and warm ambiance. Known for its innovative menu inspired by local ingredients, the restaurant provides a unique dining experience that caters to diverse palates. From savory classics to inventive dishes, Little Lemons aims to tantalize taste buds while creating memorable moments for patrons seeking a harmonious blend of quality cuisine and inviting atmosphere.</p>
        </div>
        <div className='app__about-images'>
            <img src={image1} alt="about1" className='image-1' />
            <img src={image2} alt="about1" className='image-2' />
        </div>
      </div>
    </div>
  )
}

export default About