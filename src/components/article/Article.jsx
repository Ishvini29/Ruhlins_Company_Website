import React from 'react';
import './article.css';

const Article = ({ text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);

export default Article;
