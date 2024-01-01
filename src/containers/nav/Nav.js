import React, {useState} from 'react';
import { Link }  from 'react-router-dom';
import './nav.css';
import Logo from '../../assets/Logo.svg';
import Menu from '../../assets/hamburger menu.svg';
import Cross from '../../assets/x-symbol.svg'

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={Logo} alt='Logo' className='logo'/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'specials', 'testimonials'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className='app__flex p-text'>
          <div />
          <Link to="/reservations">reservations</Link>
        </li>
      </ul>
      <div className='app__navbar-menu'>
          <img src={Menu} onClick={()=> setToggle(true)} alt='menu'/>
          {
            toggle && (
              <div>
                <img src={Cross} onClick={()=> setToggle(false)} alt='cross-icon'/>
                <ul>
                  {['Home', 'About', 'Menu', 'Reservations', 'Order Online'].map((item) => (
                    <li key={`link-${item}`}>
                    <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
      </div>
    </nav>
  )
}

export default Nav