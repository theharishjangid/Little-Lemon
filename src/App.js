import React from 'react';
import { Nav, Header, Cards, Testimonials, About, Footer, Reservations } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
          <Route path="/reservations" element={<Reservations />}></Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
