import React from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import About from './About';
import Plans from './Plans';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
