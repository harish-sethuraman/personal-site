import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import './css/style.css';
import './css/animate.css';

const Index = () => (
  <>
    <App />
  </>
);

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
