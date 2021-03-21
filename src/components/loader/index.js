import './index.css';
import React from 'react';

const PageLoader = () => (
  <div id="wrapper">
    <div className="spinner">
      <div className="loading-container">
        <div className="ball" />
        <div className="ball-inner" />
      </div>
      <p className="ball-text">loading</p>
    </div>
  </div>
);

export default PageLoader;
