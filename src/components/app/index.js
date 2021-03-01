import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Section from '../section';
import Navbar from '../navbar';

const Projects = lazy(() => import('../projects-page'));

const App = () => (
  <>
    <Navbar />

    <Router>
      <Switch>
        <Route path="/projects" exact>
          <Suspense fallback={<h1>Cannot render route</h1>}>
            <Projects />
          </Suspense>
        </Route>
        <Route path="/" exact>
          <Section />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
