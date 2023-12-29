import React from 'react'
import Hero from '../../hero/Hero'
import './main.css'

const Main = () => {
  return (
    <main className='main'>
      <Hero />
      <div>
        Cards
      </div>
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