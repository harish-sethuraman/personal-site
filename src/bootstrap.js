import ReactDOM from "react-dom";
import React, { lazy, Suspense } from "react";
const App = lazy(() => import("./components/app"));
// import App from './components/app'
import "./css/animate.css";

import PageLoader from "./components/loader";

const Index = () => {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementsByTagName("body")[0]);
