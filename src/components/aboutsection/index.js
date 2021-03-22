import React, {
  lazy, useState, useEffect, Suspense,
} from 'react';
import LazyLoad from 'react-lazy-load';
import Tetris from 'tetris-components';
import Harish from '../../assets/working.webp';
import ImageLoader from '../image-loader';
/* eslint-disable no-unused-vars */
const Facts = lazy(() => import('../facts'));

const AboutSection = ({ myDetails }) => {
  // const [myDetails, setMyDetails] = useState({ description: "" });
/* eslint-disable no-unused-vars */
  const [views, setViews] = useState(0);
  const [siteEndorsements, setSiteEndorsements] = useState(0);
  const fetchViews = () => {
    fetch('https://view-counterr.herokuapp.com/api/getcount')
      .then((view) => view.json())
      .then((values) => {
        setViews(values.views);
        setSiteEndorsements(values.yes);
        return values;
      });
  };

  useEffect(() => {
    fetchViews();
  }, []);
  return (
    <section id="about">
      <div className="container">
        <div
          className="spacer"
          data-height="60"
          style={{ height: '60px' }}
        />

        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <LazyLoad
                debounce={false}
                offset={800}
              >
                <ImageLoader src={Harish} alt="Strek" className="strek-avatar" />
              </LazyLoad>
            </div>
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: '30px' }}
            />
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded dynamic-background dynamic-shadow padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>{myDetails.description}</p>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                    style={{ height: '30px' }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <div className="skill-info clearfix">
                      <h4 className="float-left mb-3 mt-0">React JS</h4>
                    </div>
                    <Tetris
                      tetromino={{
                        type: 'progress',
                        content: '50',
                        showcontent: false,
                        theme: 'warning',
                      }}
                    />
                  </div>

                  <div className="skill-item">
                    <div className="skill-info clearfix">
                      <h4 className="float-left mb-3 mt-3">Javascript</h4>
                    </div>
                    <Tetris
                      tetromino={
                        {
                          type: 'progress',
                          content: '60',
                          showcontent: false,
                          theme: 'primary',
                        }
                      }
                    />
                  </div>

                  <div className="skill-item">
                    <div className="skill-info clearfix">
                      <h4 className="float-left mb-3 mt-3"> Webpack </h4>
                    </div>
                    <Tetris
                      tetromino={
                        {
                          type: 'progress',
                          content: '70',
                          showcontent: false,
                          theme: 'danger',
                        }
}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="spacer"
          data-height="70"
          style={{ height: '70px' }}
        />

        <div className="row">
          <div className="col-md-3 col-sm-6">
            <Suspense
              fallback={<h5>There was some problem loading component</h5>}
            >
              <Facts icon="eye" heading={views} content="Views" />
            </Suspense>
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: '30px' }}
            />
          </div>

          <div className="col-md-3 col-sm-6">
            <Suspense
              fallback={<h5>There was some problem loading component</h5>}
            >
              <Facts heading={7} icon="trophy" content="Endorsements for web development" />
            </Suspense>
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: '30px' }}
            />
          </div>

          <div className="col-md-3 col-sm-6">
            <Suspense
              fallback={<h5>There was some problem loading component</h5>}
            >
              <Facts icon="plus" heading={siteEndorsements} content="Persons like the site" />
            </Suspense>
            <div
              className="spacer d-md-none d-lg-none"
              data-height="30"
              style={{ height: '30px' }}
            />
          </div>

          <div className="col-md-3 col-sm-6">
            <Suspense
              fallback={<h5>There was some problem loading component</h5>}
            >
              <Facts icon="star-o" heading="90%" content="Matches the person you are looking for" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
