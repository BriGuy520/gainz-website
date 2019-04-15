import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h1 className="headline">Are You Ready to Make Gains?</h1>
      <p className="sub-headline">Contact John personally through email and get started changing your life today.</p>
      <div className="contact-box">
        <div className="email-icon">
          <i class="envelope outline icon"></i>
        </div>
        <span>email:
          <a href="mailto:johnnygainesfit@gmail.com"> johnnygainesfit@gmail.com</a>
        </span>
      </div>
    </div>
  );
}

export default Contact;