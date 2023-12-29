import React from 'react'
import './cards.css'
import SpecialsCard from '../components/specialscard/specialscard'
import {PrimaryButton} from '../components'
import Salad from '../assets/greek salad.jpg'
import Dessert from '../assets/lemon dessert.jpg'
import Bruchetta from '../assets/bruchetta.svg'

const Cards = () => {
  return (
    <div className='cards-layout'>
        <div className='cards-header'>
            <div className='title'>
                This Weeks Specials!
            </div>
            <PrimaryButton name="Order Online" />
        </div>
        <div className='cards-section'>
            <SpecialsCard title="Greek salad" price="$12.99" image={Salad} desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
            <SpecialsCard title="Lemon Dessert" price="$10.99" image={Dessert} desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
            <SpecialsCard title="Bruchetta" price="$5.99" image={Bruchetta} desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
            <SpecialsCard title="Greek salad" price="$12.99" image={Salad} desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
"/>
        </div>
    </div>
  )
}

export default Cards