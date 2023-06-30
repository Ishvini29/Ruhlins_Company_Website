import React from 'react';
import logo from '../../assets/rhlogo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Ruhlins (Pvt).Ltd</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>114/1, Temple Road,Nallur,Jaffna.</p>
        <p>+94 21 222 5534</p>
        <p>ruhlins@yahoo.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Ruhlins (Pvt).Ltd. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
