import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Section from '../section';
import Navbar from '../navbar';
// import '../../main.css';
// import '../../css/style.css';
import PageLoader from '../loader';

const TetrisPage = lazy(() => import('../pages/tetris/tetris'));
const ReadmeComponentsPage = lazy(() => import('../pages/readme-components'));
const WEFMSpage = lazy(() => import('../pages/wefms'));
const Projects = lazy(() => import('../projects-page'));

const App = ({ insideBigSur }) => {
  const importTheme = () => {
    if (!insideBigSur) {
      return import('../../main.css') && import('../../css/style.css') && import('../loader/index.css');
    }
  };

  useEffect(() => {
    importTheme();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Section insideBigSur={insideBigSur} />
          </Route>
          <Route
            path="/projects"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} exact>
                  <Suspense fallback={<PageLoader />}>
                    <Projects />
                  </Suspense>
                </Route>
                <Route path={`${url}/tetris`}>
                  <Suspense fallback={<PageLoader />}>
                    <TetrisPage />
                  </Suspense>
                </Route>
                <Route path={`${url}/ReadmeComponents`}>
                  <Suspense fallback={<PageLoader />}>
                    <ReadmeComponentsPage />
                  </Suspense>
                </Route>
                <Route path={`${url}/WEFMS`}>
                  <Suspense fallback={<PageLoader />}>
                    <WEFMSpage />
                  </Suspense>
                </Route>
              </>
            )}
          />
          <Route path="*">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="250" id="ghost">
              <foreignObject width="200" height="250">
                <div xmlns="http://www.w3.org/1999/xhtml">
                  <div id="container">
                    <h3 className="text-center">Page not Found</h3>
                    <div id="spooky">
                      <div id="body">
                        <div id="eyes" />
                        <div id="mouth" />
                        <div id="feet">
                          <div />
                          <div />
                          <div />
                        </div>
                      </div>
                    </div>
                    <div id="shadow" />
                  </div>
                </div>
              </foreignObject>
            </svg>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
