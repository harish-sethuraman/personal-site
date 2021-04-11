import React, { useEffect } from 'react';
// import lax from 'lax.js';

const TimeLine = ({ positionDetails }) => {
  // useEffect(() => {
    // lax.addElements('.timeline-item ', {
    //   scrollY: {
    //     opacity: [
    //       ['elCenterY + 200', 'elOutY + 200'],
    //       [1, 0],
    //     ],
    //   },
    // });
  // }, []);
  return (
    <div className="container">
      <div id="timeline">
        {positionDetails && positionDetails.map((experience, index) => {
          const {
            position, company, description, icon, duration,
          } = experience;
          return (
            <div key={Math.random()} className="timeline-item">
              <div className="timeline-icon">
                <i className={`fa fa-2x fa-${icon}`} />
              </div>
              <div className={`timeline-content dynamic-shadow dynamic-background ${index % 2 === 0 ? 'right' : ''}`}>
                <h2>{position}</h2>
                <h5>
                  {company}
                  -
                  {duration}
                </h5>
                <p>
                  {description}
                </p>
                {/* <a href="#" className="btn">{link}</a> */}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};
export default TimeLine;
