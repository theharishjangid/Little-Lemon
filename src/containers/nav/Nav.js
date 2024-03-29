import React, {useState} from 'react';
import { Link }  from 'react-router-dom';
import './nav.css';
import Logo from '../../assets/Logo.svg';
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={Logo} alt='Logo' className='logo'/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'specials', 'testimonials', 'about'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className='app__flex p-text'>
          <div />
          <Link to="/reservations">reservations</Link>
        </li>
      </ul>
      <div className='app__navbar-menu'>
          <FiMenu className="nav-menu-button" onClick={()=> setToggle(true)} aria-label="On Click"/>
          {
            toggle && (
              <div>
                <IoCloseOutline className="nav-close-button" onClick={()=> setToggle(false)} aria-label="On Click"/>
                <ul>
                  {['home', 'specials', 'testimonials', 'about'].map((item) => (
                    <li key={`link-${item}`}>
                    <a aria-label="On Click" href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                    </li>
                  ))}
                  <li className='app__flex p-text' key="reservations">
                    <Link to="/reservations">reservations</Link>
                  </li>
                </ul>
              </div>
            )
          }
      </div>
    </nav>
  )
}

export default Nav