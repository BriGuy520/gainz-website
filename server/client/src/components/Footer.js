import React from 'react';
import gainzLogo from '../images/gainz-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials-logo">
        <div className="logo">
          <img src={gainzLogo} style={{height: '50px', width: '65px'}}/>
        </div>
        <div className="socials">
          <i className="facebook icon"></i>
          <i className="instagram icon"></i>
          <i class="twitter icon"></i>
          <i class="snapchat ghost icon"></i>
        </div>
      </div>
      <div className="divider"></div>
      <p>&copy; 2019 Gainz by Gaines. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;