import React from 'react';
import Pic from '../../assets/restauranfood.jpg'
import './header.css';
import {PrimaryButton} from '../../components'

const Header = () => {
  return (
    <header className='app__header' id='home'>
      <div className='app__header__text'>
        <h1>Little Lemons</h1>
        <h3>Chicago</h3>
        <p>Little Lemons Restaurant is a cozy culinary haven nestled in the heart of Chicago, offering a delightful fusion of fresh flavors and warm ambiance.</p>
        <PrimaryButton name="Reserve A Table" link="/reservations"/>
      </div>
      <div className='app__header__image'>
        <img src={Pic} alt="hero"/>
      </div>
      </header>
  )
}

export default Header