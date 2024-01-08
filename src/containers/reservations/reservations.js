import React, {useState} from 'react'

import { Link }  from 'react-router-dom';
import './reservations.css'
import bgImage from '../../assets/restaurant.jpg'
import Cross from '../../assets/x-symbol.svg'

const Reservations = (props) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const availableTimes = props.availableTimes

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    console.log("Submitted")
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
        <Link to="/" className='back_button'><img src={Cross}/></Link>
      </div>
      <div className='app__reservations__form-container'>
        <img src={bgImage} alt='restaurant' />
        <form className='app__reservations__form-box' onSubmit={handleSubmit}>
          <div className='app__reservations__input-container'>
            <label htmlFor="res-date">Choose date<sup>*</sup> </label>
            <input type="date" id="res-date" min={today} name="date" value={date} onChange={e => setDate(e.target.value)}/>
          </div>
          {!date && <p>date is mandatory</p>}
          <div className='app__reservations__input-container'>
            <label htmlFor="res-time">Choose time<sup>*</sup></label>
            <select id="res-time " name="time" value={time} onChange={e => setTime(e.target.value)}>
              {availableTimes.map((slot) => (<option>{slot}</option>))}
            </select>
          </div>
          {!time && <p>time is mandatory</p>}
          <div className='app__reservations__input-container'>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  name="guests" value={guests} onChange={e => setGuests(e.target.value)}/>
          </div>
          <div className='app__reservations__input-container'>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="guests" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
          </div>
          <input type="submit" value="Reserve" className=' submit-btn' disabled={!getIsFormValid()}/>
        </form>
      </div>
    </div>
  )
}

export default Reservations