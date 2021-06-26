import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../data';

const Projects = () => {
  const [userData, setUserData] = useState();

  const fetchMyData = () => {
    setUserData(Data);
  };
  useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <main className="content">
      <section id="projects">
        <h1 className="project-name">Projects</h1>
        <div
          key={Math.random()}
          className="row mt-5 mb-5 justify-content-center projects"
        >
          <div className="col-8 rounded dynamic-background">

            <p>I have listed here some of the projects that are unique and up until now</p>
          </div>
          {userData && userData.projects.map((project) => (

            <div key={project.name} className="col-8 padding-10 project">
              <div className="project-card  dynamic-background rounded dynamic-shadow padding-20 overflow-hidden">
                <div className="row">
                  <div className="col-lg-8 col-sm-auto">
                    <h3>{project.name}</h3>
                    {/* <p>{project.description}</p> */}
                  </div>
                  <div className="col-lg-4 col-sm-auto">
                    <Link className="btn btn-danger" to={`projects/${project.name.replaceAll(' ', '')}`}>know more</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
};

export default Projects;
