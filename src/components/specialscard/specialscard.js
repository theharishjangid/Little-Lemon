import React from 'react'
import './specialscard.css'

const SpecialsCard = (props) => {
  return (
    <div class='special-card-layout'>
      <img src={props.image} className='special-card-image' alt="card pic"/>
      <div className='special-card-details'>
        <div className='card-head'>
          <div className='special-card-title'>{props.title}</div>
          <div className='special-card-price'>{props.price}</div>
        </div>
        <div className='special-card-desc'>{props.desc}</div>
        <div>
          <div className='special-card-delivery'>Order a delivery</div>
        </div>
      </div>
    </div>
  )
}

export default SpecialsCard