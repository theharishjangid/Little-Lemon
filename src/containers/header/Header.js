import React from 'react';
import Logo from '../../assets/Logo.svg';
import Nav from '../nav/Nav';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
        <img src={Logo} alt='Logo' className='logo'/>
        <Nav />
    </header>
  )
}

export default Header