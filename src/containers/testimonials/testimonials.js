import React from 'react'
import './testimonials.css'
import Testimonialcard from '../../components/testimonialcard/testimonialcard'

const testimonialDetails = [
  {
    name: "Sarah Johnson",
    rating: 4.5,
    desc: "Little Lemon is a gastronomic gem! From the welcoming ambiance to the delectable menu, every visit is a culinary delight. Five stars for exceptional service and flavors that leave a lasting impression.",
  },
  {
    name: "Benjamin Lawson",
    rating: 5,
    desc: "A must-try in Chicago! Little Lemon Restaurant crafts an exquisite dining experience. Impeccable service, an enticing menu, and a cozy atmosphere make it a perfect five-star destination for food enthusiasts.",
  },
  {
    name: "Jackson Bennett",
    rating: 4,
    desc: "This restaurant is a culinary masterpiece. The flavors are both bold and harmonious, the service is impeccable, and the ambiance is inviting. A true five-star experience for foodies seeking excellence.",
  },
  {
    name: "Olivia Simmons",
    rating: 5,
    desc: "Little Lemon exceeded expectations! The eclectic menu, charming decor, and attentive staff create a dining oasis. A solid five-star rating for a memorable gastronomic journey.",
  },
  {
    name: "Andrew Williams",
    rating: 4,
    desc: "A hidden gem! The menu is a delightful journey through unique flavors, and the staff goes above and beyond. A solid five stars for a charming atmosphere and an unforgettable dining experience.",
  },
  {
    name: "Ethan Mitchell",
    rating: 3.5,
    desc: "Little Lemon deserves all the accolades! From the first bite to the last, the dishes are a celebration of taste. The friendly staff and cozy setting make it a standout destination. Five stars for an exceptional dining adventure.",
  },
]
const Testimonials = () => {
  return (
    <div className='app__testimonials' id='testimonials'>
        <h2>Testimonials</h2>
        <div className='app__testimonials-section'>
          {
            testimonialDetails.map((testimonial) => (
              <Testimonialcard name={testimonial.name} desc={testimonial.desc} rating={testimonial.rating}/>
            ))
          }
        </div>
    </div>
  )
}

export default Testimonials