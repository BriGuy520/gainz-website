import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>Are You Ready to Make Gains?</h1>
      <p>Contact John personally through email and get started changing your life today.</p>
      <p></p>
      <div className="contact-box">
        <i class="envelope outline icon"></i>
        <p>email:
          <a href="#">johnnygainesfit@gmail.com</a>
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;