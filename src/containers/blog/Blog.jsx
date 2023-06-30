import React from 'react';
// import Article from '../../components/article/Article';
import { ImPhone } from 'react-icons/im';
import { BsFillEnvelopeFill, BsFillHouseFill } from 'react-icons/bs';

import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        Contact Us <br />
      </h1>
    </div>
    <div className="gpt3__cta">
      <div className="card3">
        <h2>Ruhlins (Pvt).Ltd</h2>
        <br />
        <BsFillHouseFill />
        <br /> <p>114/1, Temple Road, Nallur,Jaffna.</p>
        <br />
        <ImPhone />
        <br /><p> +94 21 222 5534</p>
        <br />
        <BsFillEnvelopeFill />
        <br /><p>ruhlins@yahoo.com</p>
      </div>
    </div>
  </div>
);

export default Blog;
