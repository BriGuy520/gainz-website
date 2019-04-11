import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="contact-container">
      <div id="contact" className="contact-section">
        <h1>Are You Ready to Make Gains?</h1>
        <p>Contact John personally through email and get started changing your life today.</p>
        <div className="contact-box">
          <i class="envelope outline icon"></i>
          <p>email:
            <a href="mailto:johnnygainesfit@gmail.com">johnnygainesfit@gmail.com</a>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;