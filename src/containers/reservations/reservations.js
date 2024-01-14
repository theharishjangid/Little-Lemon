import React, {useState} from 'react'

import { Link }  from 'react-router-dom';
import './reservations.css'
import bgImage from '../../assets/restaurant.jpg'
import { IoCloseOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import PrimaryButton from '../../components/primarybutton/PrimaryButton';

const Reservations = (props) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("5:00 PM");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const availableTimes = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("5:00 PM");
    setGuests(1);
    setOccasion("Birthday");
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const getIsFormValid = () => {
    return (
      date && time && guests && guests > 0 && guests <= 10
    );
  };

  return (
    <div className='app__reservations'>
      <div className='app__reservations-title'>
        <h1>Reservations</h1>
        <Link to="/" className='back_button'><IoCloseOutline class="close-button"/></Link>
      </div>
      <div className='app__reservations__form-container'>
        <img src={bgImage} alt='restaurant'/>
        {!isSubmitted ? (
          <form className='app__reservations__form-box' onSubmit={handleSubmit}>
            <div className='app__reservations__input-container'>
              <label htmlFor="res-date">Choose date<sup>*</sup> </label>
              <input type="date" id="res-date" min={today} name="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div className='app__reservations__input-container'>
              <label htmlFor="res-time">Choose time<sup>*</sup></label>
              <select id="res-time " name="time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map((slot) => (<option>{slot}</option>))}
              </select>
            </div>
            <div className='app__reservations__input-container'>
              <label htmlFor="guests">Number of guests</label>
              <input type="number" min="1" max="10" id="guests"  name="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
            </div>
            <div className='app__reservations__input-container'>
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="guests" value={occasion} onChange={e => setOccasion(e.target.value)}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Party</option>
              </select>
            </div>
            <input type="submit" value="Reserve" className='primary_button align-self-center' disabled={!getIsFormValid()}/>
          </form>
        ) : (
        <div className='app__reservations__form-box form_submit'>
          <h2>Booking is confirmed!</h2>
          <GrEmoji className='emoji'/>
          <p>Looking forward to making your dining experience truly memorable.</p>
          <div className='nav-back-buttons'>
            <button className='primary_button' onClick={()=>(setIsSubmitted(false))}>Reserve Another Table</button>
            <PrimaryButton name="Home" link="/"/>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Reservations