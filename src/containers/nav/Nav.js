import React from 'react';
import './nav.css';
import { NavButton } from '../../components';

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <NavButton name="Home" />
      </div>
      <div>
        <NavButton name="About" />
      </div>
      <div>
        <NavButton name="Menu" />
      </div>
      <div>
      <NavButton name="Reservations" />
      </div>
      <div>
      <NavButton name="Order Online" />
      </div>
      <div>
        <NavButton name="Login" />
      </div>
    </nav>
  )
}

export default Nav