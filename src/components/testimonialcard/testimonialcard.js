import React from 'react'
import './testimonialcard.css'
import Profile from '../../assets/imageprofile.png'
import Rating from '../../assets/rating.svg'

const Testimonialcard = (props) => {
  return (
    <div class='card-layout'>
        <div className='container'>
            <img src={Profile} className='profile' alt='profile'/>
            <div className='name-rating'>
                <div className='name'>{props.name}</div>
                <img src={Rating} className='rating' alt='rating'/>
            </div>
        </div>
        <div className='desc'>{props.desc}</div>
    </div>
  )
}

export default Testimonialcard