import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Introduction" text="Established under the business name ordinance in the year 1988 and incorporated under the companies act No.07 of 2007 in 2007 in Jaffna" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Quality is not an act, it is a habit.</h1>
      <p>CNCI Achiever-Bronze Award winner under the Special District Category.</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Vision" text="To be a Leading Engineering Superiority in the Island" />
      <Feature title="Mission" text="To provide the highest quality Construction Solutions at affordable price, within specific time frame, using higher technology and committed professional service" />
      <Feature title="Organization  Moto" text="Our reputation is build on quality." />
    </div>
  </div>
);

export default WhatGPT3;
