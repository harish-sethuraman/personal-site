import React from 'react';
import RenderProjects from './renderProjects';

const Projects = ({ projects }) => (
  <section id="projects">
    <h2 className="project-name">Projects</h2>
    {projects.map((data) => (
      <div
        key={Math.random()}
        className="row mt-5 mb-5 justify-content-center projects"
      >
        <div className="col-md-4 col-sm-8 padding-30 project">
          {RenderProjects(data.name)}
        </div>
        <div className="col-md-6 col-lg-6 padding-30 project">
          <div className="timeline exp dynamic-background rounded dynamic-shadow padding-30 overflow-hidden">
            <h2>{data.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
            <center>
              <a className="btn btn-danger" href={data.link}>
                know more
              </a>
            </center>
          </div>
        </div>
      </div>
    ))}
  </section>
);
export default Projects;
