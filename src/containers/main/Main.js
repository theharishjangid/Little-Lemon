import React from 'react'
import Hero from '../../hero/Hero'
import './main.css'
import Cards from '../../cards/cards'
import Testimonials from '../../testimonials/testimonials'
import About from '../../about/about'

const Main = () => {
  return (
    <main className='main'>
      <Hero />
      <Cards />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main