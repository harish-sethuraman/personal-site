import React, { useEffect, useState } from 'react';

import './index.css';

const Projects = () => {
  const [userData, setUserData] = useState();

  const fetchMyData = () => {
    fetch('../../../datas/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((myJson) => {
        setUserData(myJson);
        return myJson;
      });
  };
  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <section id="projects">
      <h1 className="project-name">Projects</h1>
      {userData && userData.projects.map((project) => (
        <div
          key={Math.random()}
          className="row mt-5 mb-5 justify-content-center projects"
        >
          <div className="col-md-8 col-lg-8 padding-10 project">
            <div className="project-card  dynamic-background rounded dynamic-shadow padding-20 overflow-hidden">
              <div className="row">
                <div className="col-8">
                  <h3>{project.name}</h3>
                  {/* <p>{project.description}</p> */}
                </div>
                <div className="col-4">
                  <a className="btn btn-danger" href={`/${project.name.replace(' ', '')}`}>know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Projects;
