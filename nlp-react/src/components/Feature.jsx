import React from 'react';
import '../css/features.css'

const Feature = ({ icon, title, text, cta, link }) => (
  <div className="feature col">
    <div className="feature-icon bg-primary bg-gradient">
      <svg className="bi" width="1em" height="1em"><use xlinkHref={`#${icon}`} /></svg>
    </div>
    <h2>{title}</h2>
    <p>{text}</p>
    <a href={`${link}`} className="icon-link">
      {cta}
      <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"/></svg>
    </a>
  </div>
);

const FeaturesList = ({ features }) => (
  <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Feature Highlights</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {features.map((feature, index) => <Feature key={index} {...feature} />)}
    </div>
  </div>
);

export default FeaturesList;
