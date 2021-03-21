import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import App from './components/app';
import './css/style.css';
import './css/animate.css';

import PageLoader from './components/loader';

const Index = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(!Loading), 1500), []);
  return <>{Loading ? <PageLoader /> : <App />}</>;
};

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
