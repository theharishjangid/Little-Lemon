import React from 'react'
import './primarybutton.css'

const PrimaryButton = props => {
  return (
    <button className='primary_button'>{props.name}</button>
  )
}

export default PrimaryButton