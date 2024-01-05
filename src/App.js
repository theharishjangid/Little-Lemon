import React, {useReducer} from 'react';
import { Nav, Header, Cards, Testimonials, About, Footer, Reservations } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import {fetchAPI} from '../src/mockAPI'



function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // Update available times based on the selected date
        // For now, returning the same times regardless of the date
        return initializeTimes();
      default:
        return state;
    }
  };
  const initializeTimes = () => {
    const today = new Date().toISOString().split('T')[0];
    console.log(today)
    var initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI(today).then((data) => {
      initialTimes = data; // Set the fetched data
    });
    console.log(initialTimes)
    return initialTimes;
  };
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Nav />
              <Header />
              <Cards />
              <Testimonials />
              <About />
              <Footer/>
            </React.Fragment>
          }></Route>
          <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
