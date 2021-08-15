import React, {
  useState, lazy, useEffect, Suspense,
} from 'react';
import Stars from '../stars';
import HeroSection from '../herosection';
// const AboutSection = lazy(() => import("../aboutsection"));
import AboutSection from '../aboutsection';
import Data from '../../data';
import MacUI from '../macUI';
import { randomNumber } from './randomHelpers';

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
    fetch('https://strek-view-counter.vercel.app/api/views')
      .then((view) => view.json())
      .then((values) => {
        setViews(values.views);
        setSiteEndorsements(values.yes);
        return values;
      }).catch(() => {
        setViews('3500+');
        setSiteEndorsements('80+');
      });
  };

  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <>
      {!insideBigSur && (
      <div
        className="bubbles"
        style={{ top: '-100vh', position: 'fixed', zIndex: '0' }}
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
      <div className="meteorscontainer">
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />
        <div className="meteors movingmeteors" />

        {Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)).map(
          () => (
            <div
              className="staticmeteor meteors"
              key={Math.random() * 40}
              style={{
                top: randomNumber(0, window.innerHeight),
                right: randomNumber(0, window.innerWidth),
              }}
            />
          ),
        )}
      </div>

      <main className="content" style={{ zIndex: 2 }}>
        {userData && (
          <>
            <HeroSection />
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
