import React, { useEffect } from "react";
import Tetris from "../../tetris/tetris";
import lax from "lax.js";
import RenderProjects from './renderProjects'

const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h1 className="project-name">Projects</h1>
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
              <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
              <center>
                <a className="btn btn-danger" href={data.link}>
                  Visit this project
                </a>
              </center>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Projects;
