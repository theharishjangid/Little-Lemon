import React from 'react'
import Hero from '../../hero/Hero'
import './main.css'
import Cards from '../../cards/cards'

const Main = () => {
  return (
    <main className='main'>
      <Hero />
      <div className='empty-space'></div>
      <Cards />
      <div>
        Testimonials
      </div>
      <div>
        About Us
      </div>
    </main>
  )
}

export default Main