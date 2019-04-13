import React from 'react';
import gainzLogo from '../images/gainz-logo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socials-logo">
        <img alt="The G" src={gainzLogo} style={{height: '50px', width: '65px'}}/>
        <a href=""></a><i className="facebook icon"></i>
        <a href="https://www.instagram.com/johnathangainesfit/"><i className="instagram icon"></i></a>
        <i className="twitter icon"></i>
        <i className="snapchat ghost icon"></i>
      </div>
      <div className="divider"></div>
      <p>&copy; 2019 Gainz by Gaines. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;