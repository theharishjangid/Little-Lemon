import React from 'react'
import './navButton.css'

const NavButton = props => {
  return (
    <div className='nav_button'>{props.name}</div>
  )
}

export default NavButton