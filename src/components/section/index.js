import React, { useState, lazy, useEffect, Suspense } from "react";
import Stars from "../stars";
const HeroSection = lazy(() => import("../herosection"));
// import HeroSection from "../herosection";
// const AboutSection = lazy(() => import("../aboutsection"));
import AboutSection from "../aboutsection";
const ExperienceSection = lazy(() => import("../experiencesection"));
// const Projects = lazy(() => import("../projects"));
// const Questionnaire = lazy(() => import("../questionnaire"));
// const Navbar = lazy(() => import("../navbar"));


// import ExperienceSection from "../experiencesection";
import Projects from "../projects";
import Questionnaire from "../questionnaire";
import Navbar from "../navbar";
import Rocket from "../../assets/rocket.svg";
import Mars from "../../assets/mars.svg";

const Section = () => {
  const [userData, setUserData] = useState();
  const fetchMyData = () => {
    fetch("../../../datas/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setUserData(myJson);
        return myJson;
      });
  };

  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <>
      <img src={Rocket} className="rocket" />
      <img src={Mars} className="mars" />

      <div
        className="bubbles"
        style={{ top: "-100vh", position: "fixed", zIndex: "1" }}
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
      <Navbar />

      <main className="content">
        {userData && (
          <>
            <Suspense fallback={<h1>Sorry couldnt load the component</h1>}>
              <HeroSection />
</Suspense>
              <AboutSection myDetails={userData} />

              <Projects projects={userData.projects} />
            <Suspense fallback={<h1>Sorry couldnt load the component</h1>}>

              <ExperienceSection positionDetails={userData.experience} />
              </Suspense>
              <Questionnaire />
          </>
        )}

        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
};

export default Section;
