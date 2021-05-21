import React, {
  useState, lazy, useEffect, Suspense,
} from 'react';
import Stars from '../stars';
// import HeroSection from "../herosection";
// const AboutSection = lazy(() => import("../aboutsection"));
import AboutSection from '../aboutsection';
import Data from '../../data';

// import ExperienceSection from "../experiencesection";
// import Projects from "../projects";
// import Questionnaire from "../questionnaire";
import Rocket from '../../assets/rocket.svg';
import Mars from '../../assets/mars.svg';

const Projects = lazy(() => import('../projects'));
const Questionnaire = lazy(() => import('../questionnaire'));

const HeroSection = lazy(() => import('../herosection'));
const ExperienceSection = lazy(() => import('../experiencesection'));

const Section = () => {
  const [userData, setUserData] = useState();
  const fetchMyData = () => {
    setUserData(Data);
  };

  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <>
      {/* <img src={Rocket} alt="rocket" className="rocket" /> */}
      {/* <img src={Mars} alt="mars" className="mars" /> */}

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

      <main className="content">
        {userData && (
          <>
            <Suspense fallback={<center><h1>loading the component</h1></center>}>
              <HeroSection />
            </Suspense>
            <Suspense fallback={<center><h1>loading the component</h1></center>}>
              <AboutSection myDetails={userData} />
            </Suspense>

            <Suspense fallback={<center><h1>loading the component</h1></center>}>
              <Projects projects={userData.projects} />
            </Suspense>

            <Suspense fallback={<center><h1>loading the component</h1></center>}>
              <ExperienceSection positionDetails={userData.experience} />
            </Suspense>
            <Suspense fallback={<center><h1>loading the component</h1></center>}>
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
