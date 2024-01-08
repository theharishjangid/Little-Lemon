import React from 'react'
import './primarybutton.css'
import { Link }  from 'react-router-dom';

const PrimaryButton = props => {
  return (
    <Link to={props.link} class='primary_button-link'>
      <button className='primary_button'>{props.name}</button>
    </Link>
  )
}

export default PrimaryButton