import React, { lazy, Suspense } from 'react';
// import TimeLine from "../timeline";
const TimeLine = lazy(() => import('../timeline'));
const ExperienceComponent = ({ positionDetails }) => (
  <section id="experience">
    <h2 className="project-name">Experience</h2>
    <div className="container">
      <div className="spacer" data-height="60" />
      <Suspense fallback={<h2>Loading component</h2>}>
        <TimeLine positionDetails={positionDetails} />
      </Suspense>

    </div>
  </section>
);

export default ExperienceComponent;
