import React from 'react';
import { Header, Main, Footer } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />}></Route>
          <Route path="/booking"></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
