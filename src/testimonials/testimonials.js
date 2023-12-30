import React from 'react'
import './testimonials.css'
import Testimonialcard from '../components/testimonialcard/testimonialcard'

const Testimonials = () => {
  return (
    <div className='testimonials-layout'>
        <div className='title'>Testimonials</div>
        <div className='cards'>
            <Testimonialcard name="Sarah Johnson" desc="Little Lemons is a gastronomic gem! From the welcoming ambiance to the delectable menu, every visit is a culinary delight. Five stars for exceptional service and flavors that leave a lasting impression."/>
            <Testimonialcard name="Benjamin Lawson" desc="A must-try in Chicago! Little Lemons Restaurant crafts an exquisite dining experience. Impeccable service, an enticing menu, and a cozy atmosphere make it a perfect five-star destination for food enthusiasts." />
            <Testimonialcard name="Olivia Simmons" desc="Little Lemons exceeded expectations! The eclectic menu, charming decor, and attentive staff create a dining oasis. A solid five-star rating for a memorable gastronomic journey."/>
        </div>
        <div className='cards'>
            <Testimonialcard name="Jackson Bennett" desc="This restaurant is a culinary masterpiece. The flavors are both bold and harmonious, the service is impeccable, and the ambiance is inviting. A true five-star experience for foodies seeking excellence."/>
            <Testimonialcard name="Andrew Williams" desc="A hidden gem! The menu is a delightful journey through unique flavors, and the staff goes above and beyond. A solid five stars for a charming atmosphere and an unforgettable dining experience."/>
            <Testimonialcard name="Ethan Mitchell" desc="Little Lemons deserves all the accolades! From the first bite to the last, the dishes are a celebration of taste. The friendly staff and cozy setting make it a standout destination. Five stars for an exceptional dining adventure."/>
        </div>
    </div>
  )
}

export default Testimonials