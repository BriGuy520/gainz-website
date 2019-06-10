import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import CoverSlider from './slider/CoverSlider';
import About from './About';
import Plans from './Plans';
import Contact from './Contact';
import Shop from './shop/Shop';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
        <CoverSlider />
        <About />
        <Plans />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
