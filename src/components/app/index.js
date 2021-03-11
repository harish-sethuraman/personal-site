import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Section from '../section';
import Navbar from '../navbar';
import TetrisPage from '../pages/tetris/tetris';
import ReadmeComponentsPage from '../pages/readme-components';
import WEFMSpage from '../pages/wefms';

const Projects = lazy(() => import('../projects-page'));

const App = () => (
  <>

    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Section />
        </Route>
        <Route
          path="/projects"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} exact>
                <Suspense fallback={<h1>No route found</h1>}>
                  <Projects />
                </Suspense>
              </Route>
              <Route path={`${url}/tetris`} component={TetrisPage} />
              <Route path={`${url}/ReadmeComponents`} component={ReadmeComponentsPage} />
              <Route path={`${url}/WEFMS`} component={WEFMSpage} />

            </>
          )}
        />
      </Switch>
    </Router>
  </>
);

export default App;
