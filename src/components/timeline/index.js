import React from 'react';

const TimeLine = ({ positionDetails }) => (
  <div className="container">
    <div id="timeline">
      {positionDetails
          && positionDetails.map((experience, index) => {
            const {
              position, company, description, icon, duration,
            } = experience;
            return (
              <div key={Math.random()} className="timeline-item">
                <div className="timeline-icon">
                  <i className={`fa fa-2x fa-${icon}`} />
                </div>
                <div
                  className={`timeline-content dynamic-shadow dynamic-background ${
                    index % 2 === 0 ? 'right' : ''
                  }`}
                >
                  <h2>{position}</h2>
                  <h5>
                    {company}
                    -
                    {duration}
                  </h5>
                  <p>{description}</p>
                  {/* <a href="#" className="btn">{link}</a> */}
                </div>
              </div>
            );
          })}
      <div className="timeline-item">
        <div className="timeline-icon">
          <i className="fa fa-2x fa-graduation-cap" />
        </div>
      </div>
    </div>
  </div>
);
export default TimeLine;
