import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
// import App from './components/app'
import './css/animate.css';

import PageLoader from './components/loader';

const App = lazy(() => import('./components/app'));

const Index = () => (
  <>
    <Suspense fallback={<PageLoader />}>
      <App />
    </Suspense>
  </>
);

ReactDOM.render(<Index />, document.getElementsByTagName('body')[0]);
