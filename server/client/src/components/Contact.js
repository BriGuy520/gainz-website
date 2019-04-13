import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h1>Are You Ready to Make Gains?</h1>
      <p>Contact John personally through email and get started changing your life today.</p>
      <div className="contact-box">
        <i class="envelope outline icon"></i>
        <span>email:
          <a href="mailto:johnnygainesfit@gmail.com"> johnnygainesfit@gmail.com</a>
        </span>
      </div>
    </div>
  );
}

export default Contact;