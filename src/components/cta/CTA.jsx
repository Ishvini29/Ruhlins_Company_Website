// import React from 'react';
// import './cta.css';
// const CTA = () => (
//   <div className="gpt3__cta">
//     <div className="gpt3__cta-content">
//       <h3>Click here to see more projects.</h3>
//     </div>
//     <div className="gpt3__cta-btn">
//       <button type="button">Projects</button>
//     </div>
//   </div>
// );

// export default CTA;
import React from 'react';
import img1 from '../../assets/img1.JPG';
import './cta.css';

const CTA = () => (
  <div className="gpt3__ct">
    <div className="card">
      <h3>Private Bungalow at Thirunelvely</h3>
      <span className="bar" />
      <img className="uom-img" src={img1} alt="uom" />
      <br />
      <p>Proposed Private Bungalow at Sivan Amman Road, Thirunelvely in 2011</p>
    </div>
    <div className="card">
      <h3>Private Bungalow at Thirunelvely</h3>
      <span className="bar" />
      <img className="uom-img" src={img1} alt="uom" />
      <br />
      <p>Proposed Private Bungalow at Sivan Amman Road, Thirunelvely in 2011</p>
    </div>
    <div className="card">
      <h3>Private Bungalow at Thirunelvely</h3>
      <span className="bar" />
      <img className="uom-img" src={img1} alt="uom" />
      <br />
      <p>Proposed Private Bungalow at Sivan Amman Road, Thirunelvely in 2011</p>
    </div>
    <br />
  </div>
);

export default CTA;

