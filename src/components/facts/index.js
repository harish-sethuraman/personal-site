import React from 'react';

const Facts = ({ heading, content, icon }) => (
  <div className="fact-item">
    <span className={`icons fa fa-${icon} fa-5`} />
    <div className="details">
      <h3 className="mb-0 mt-0 number"><em className="count">{heading}</em></h3>
      <p className="mb-0">{content}</p>
    </div>
  </div>
);

export default Facts;
