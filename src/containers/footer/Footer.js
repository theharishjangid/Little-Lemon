import React from 'react'
import './footer.css';
import Logo from '../../assets/Logo.svg';
import Social from '../../assets/social.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={Logo} alt='Logo' className='logo'/>
      <div class='desc'>
        <div class='footer-container'>
          <div className='title'>Doormat Navigation</div>
          <div>Home</div>
          <div>About</div>
          <div>Menu</div>
          <div>Reservations</div>
          <div>Order Online</div>
        </div>
        <div class='footer-container'>
          <div className='title'>Contact</div>
          <div>1234 Elm Street</div>
          <div>Chicago, IL 60601</div>
          <div>United States.</div>
          <div>(555) 123-4567</div>
          <div>------------------------</div>
          <div>info@littlelemons.com</div>
        </div>
        <div class='footer-container'>
          <div className='title'>Social Media Links</div>
          <img src={Social} alt="social" height='100px'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
