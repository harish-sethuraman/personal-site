import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Section from '../section';
import Navbar from '../navbar';
import "../../css/style.css";

const TetrisPage = lazy(() => import('../pages/tetris/tetris'));
const ReadmeComponentsPage = lazy(() => import('../pages/readme-components'));
const WEFMSpage = lazy(() => import('../pages/wefms'));
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
              <Route path={`${url}/tetris`}>
                <Suspense fallback={<h1>No route found</h1>}>
                  <TetrisPage />
                </Suspense>
              </Route>
              <Route path={`${url}/ReadmeComponents`}>
                <Suspense fallback={<h1>No route found</h1>}>

                  <ReadmeComponentsPage />
                </Suspense>
              </Route>
              <Route path={`${url}/WEFMS`}>
                <Suspense fallback={<h1>No route found</h1>}>
                  <WEFMSpage />
                </Suspense>
              </Route>

            </>
          )}
        />
      </Switch>
    </Router>
  </>
);

export default App;
