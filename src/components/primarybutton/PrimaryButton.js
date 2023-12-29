import React from 'react'
import './primarybutton.css'

const PrimaryButton = props => {
  return (
    <div className='primary_button'>{props.name}</div>
  )
}

export default PrimaryButton