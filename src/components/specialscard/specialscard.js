import React from 'react'
import './specialscard.css'
import { MdDeliveryDining } from "react-icons/md";


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
        <div className='special-card-footer'>
          <div className='special-card-delivery'>Order a delivery</div>
          <MdDeliveryDining className='special-card-delivery-icon'/>
        </div>
      </div>
    </div>
  )
}

export default SpecialsCard