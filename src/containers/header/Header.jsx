import React from 'react';
// import people from '../../assets/people.png';
import bg from '../../assets/bg3.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">WE OFFER CONSTTRUCTION CONSULTING AND ADVISORY</h1>
      <p>Manage challenges and uncertainties throughout the project lifecycle.</p>

      <div className="gpt3__header-content__input">
        <button type="button"><a href="#blog">Contact Us</a></button>
      </div>

      <div className="gpt3__header-content__people">
        <p>Our Construction Solutions team of respected industry experts focus on improving the delivery of construction projects across all industry sectors and rely on processes to promote collaboration among project stakeholders and optimise performance.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={bg} />
    </div>
  </div>
);

export default Header;
