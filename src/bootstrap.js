import ReactDOM from 'react-dom';
import React from 'react';

import './css/dummy.css';

import App from './components/app';

const Index = () => (
  <>
    <App />
  </>
);

ReactDOM.render(<Index />, document.getElementById('root'));
