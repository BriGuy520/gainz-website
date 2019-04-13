import React from 'react';
import Navbar from './Navbar';
import CoverSlider from './slider/CoverSlider';
import About from './About';
import Plans from './Plans';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <CoverSlider />
      <About />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
