import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css';
import Logo from '../../assets/Logo.svg';
import Social from '../../assets/social.svg';

const Footer = () => {
  return (
    <footer className='app__footer'>
      <img src={Logo} alt='Logo'/>
      <div class='app__footer__desc'>
        <div class='app__footer-container'>
          {['home', 'about', 'specials', 'testimonials'].map((item) => (
            <li key={`link-${item}`} className='app__flex p-text'>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li className='app__flex p-text'>
            <div />
            <Link to="/reservations">reservations</Link>
          </li>
        </div>
        <div class='app__footer-container'>
          <h4>Contact</h4>
          <p>1234 Elm Street<br />Chicago, IL 60601<br />United States.<br />(555) 123-4567</p>
          <p>info@littlelemons.com</p>
        </div>
        <div class='app__footer-container'>
          <h4>Social Media</h4>
          <img src={Social} alt='social-icons'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
