import React from 'react'
import './cards.css'
import {PrimaryButton, SpecialsCard} from '../../components'
import Salad from '../../assets/greek salad.jpg'
import Dessert from '../../assets/lemon dessert.jpg'
import Bruschetta from '../../assets/bruchetta.svg'

const cardsDetail = [
  {
    title: "Greek salad",
    price: "$12.99",
    image: Salad,
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Lemon Dessert",
    price: "$10.99",
    image: Dessert,
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    image: Bruschetta,
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
]

const Cards = () => {
  return (
    <div className='app__cards' id='specials'>
        <div className='app__cards-header'>
            <h2>This Weeks Specials!</h2>
            <PrimaryButton name="Order Online" />
        </div>
        <div className='app__cards-section'>
          {
            cardsDetail.map((card) => (
              <SpecialsCard
                title={card.title}
                price={card.price}
                image={card.image}
                desc={card.desc}
                />
            ))
          }
        </div>
    </div>
  )
}

export default Cards