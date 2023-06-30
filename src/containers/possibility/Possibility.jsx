import React from 'react';
import Engineer from '../../assets/2.png';
import './possibility.css';
import img1 from '../../assets/img1.JPG';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img
        src={Engineer}
        alt="engineer"
        style={{ width: '80%', height: '100%' }}
      />
    </div>

    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">
        These are the projects
        <br /> which was done by us.
      </h1>
      <div className="card">
        <h3>Private Bungalow at Thirunelvely</h3>
        <span className="bar" />
        <img className="uom-img" src={img1} alt="uom" />
        <br />
        <p>
          Proposed Private Bungalow at Sivan Amman Road, Thirunelvely in 2011
        </p>
      </div>
    </div>
  </div>
);

export default Possibility;
