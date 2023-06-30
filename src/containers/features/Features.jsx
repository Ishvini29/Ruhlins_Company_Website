import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Building Construction',
    text: 'We provide the full range of Building Construction services including planning, design, and execution of various construction activities, including excavation, foundation laying, framing, roofing, electrical and plumbing installation, and finishing.',
  },
  {
    title: 'Engineering & Architectural Consultancy',
    text: 'Our experts provides assurance of minimum riadvice and assistance in the planning, design, and construction of buildings, infrastructure, and other engineering projects.',
  },
  {
    title: 'Property Development',
    text: 'We  transforms raw land or existing buildings into developed properties that are ready for sale, lease or use.Site acquisition, market research, design and planning, financing, construction, and marketing are done by us.',
  },
  {
    title: 'Surveying of Land',
    text: 'We provide the service that involves the measurement and mapping of land and other geographic features.',
  },
  {
    title: 'Quality Testing of Buildings',
    text: 'We give service that involves the evaluation and assessment of the structural integrity and safety of buildings which is essential for ensuring that buildings are constructed to meet the required standards of quality, safety, and durability.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Ruhlins (Pvt).Ltd has the skills to offer services in different built environment fields to a diverse group of clients.</h1>
      <p>These are the services provided by us.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
