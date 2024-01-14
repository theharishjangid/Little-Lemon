import React from 'react'
import './testimonialcard.css'
import { RxAvatar } from "react-icons/rx";
import { BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";


const Testimonialcard = (props) => {
  const getStars = (rating) => {
    const star_list = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star_list.push(<BsStarFill className='rating' />);
      } else if (i - 0.5 === rating) {
        star_list.push(<BsStarHalf className='rating' />);
      } else {
        star_list.push(<BsStar className='rating' />);
      }
    }
    return star_list
  };
  return (
    <div class='card-layout'>
        <div className='container'>
          <RxAvatar className='profile'/>
          <div className='name-rating'>
              <div className='name'>{props.name}</div>
              <div>
                {getStars(props.rating).map((star) => (star))}
              </div>
          </div>
        </div>
        <div className='desc'>{props.desc}</div>
    </div>
  )
}

export default Testimonialcard