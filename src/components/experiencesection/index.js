import React, { lazy, Suspense } from "react";
// import TimeLine from "../timeline";
const TimeLine = lazy( () => import('../timeline')) 
const ExperienceComponent = ({ positionDetails }) => {
  return (
    <section id="experience">
      <h1 className="project-name">Experience</h1>
      <div className="container">
        <div className="spacer" data-height="60"></div>
      <Suspense fallback={<h1>Loading component</h1>}>
        <TimeLine positionDetails={positionDetails} />
        </Suspense>

      </div>
    </section>
  );
};

export default ExperienceComponent;
