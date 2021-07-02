import React, {
  useState, lazy, useEffect, Suspense,
} from 'react';
import Stars from '../stars';
import HeroSection from '../herosection';
// const AboutSection = lazy(() => import("../aboutsection"));
import AboutSection from '../aboutsection';
import Data from '../../data';
import MacUI from '../macUI';
// import ExperienceSection from "../experiencesection";
// import Projects from "../projects";
// import Questionnaire from "../questionnaire";
// import Rocket from '../../assets/rocket.svg';
// import Mars from '../../assets/mars.svg';

const Projects = lazy(() => import('../projects'));
const Questionnaire = lazy(() => import('../questionnaire'));

// const HeroSection = lazy(() => import('../herosection'));
const ExperienceSection = lazy(() => import('../experiencesection'));

const Section = ({ insideBigSur }) => {
  const [userData, setUserData] = useState();
  const [views, setViews] = useState(0);
  const [siteEndorsements, setSiteEndorsements] = useState(0);

  const fetchMyData = () => {
    setUserData(Data);
    fetch('https://view-counterr.herokuapp.com/api/getcount')
      .then((view) => view.json())
      .then((values) => {
        setViews(values.views);
        setSiteEndorsements(values.yes);
        return values;
      });
  };

  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <>
      {/* <img src={Rocket} alt="rocket" className="rocket" /> */}
      {/* <img src={Mars} alt="mars" className="mars" /> */}

      {!insideBigSur && (
        <div
          className="bubbles"
          style={{ top: '-100vh', position: 'fixed', zIndex: '-1' }}
        >
          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />

          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />

          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />

          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />

          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />
          <Stars fill="#FF4C60" />

          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />
          <Stars fill="#FFD15C" />

          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />
          <Stars fill="#6C6CE5" />

          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />
          <Stars fill="#44D7B6" />
        </div>
      )}
      <main className="content">
        {userData && (
          <>
            <HeroSection />
            <section id="cloneverse-text" className="col-8">
              <h2 className="project-name">Clone Verse</h2>
              <p className="">
                Just like MCU and DCEU, this is a Website Clone Universe (WCU).
                Find things that you have loved using over the years.
                {/* eslint-disable-next-line max-len */}
                &nbsp;These websites are standalone websites as well as Micro
                Frontends integrated with each other harmoniously. Every
                site&apos;s source code can be found &nbsp;
                <a
                  className="magic-link"
                  href="https://github.com/harish-sethuraman?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  in this link
                </a>
              </p>
            </section>
            <section id="cloneverse">{!insideBigSur && <MacUI />}</section>
            <Suspense
              fallback={(
                <center>
                  <h1>loading the component</h1>
                </center>
              )}
            >
              <AboutSection
                myDetails={userData}
                views={views}
                siteEndorsements={siteEndorsements}
              />
            </Suspense>

            <Suspense
              fallback={(
                <center>
                  <h1>loading the component</h1>
                </center>
              )}
            >
              <Projects projects={userData.projects} />
            </Suspense>

            <Suspense
              fallback={(
                <center>
                  <h1>loading the component</h1>
                </center>
              )}
            >
              <ExperienceSection positionDetails={userData.experience} />
            </Suspense>
            <Suspense
              fallback={(
                <center>
                  <h1>loading the component</h1>
                </center>
              )}
            >
              <Questionnaire />
            </Suspense>
          </>
        )}

        <div className="spacer" data-height="96" />
      </main>
    </>
  );
};

export default Section;
