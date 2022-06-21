import React from 'react';

import { projects } from '../../contants';

import './Projects.less';

const Projects = () => {
  return (
    <section id="projects" className="container projects">
      <h2 className="heading">Projects</h2>

      <div className="projects-container">
        {projects.map(({ title, desc, image, stack, source, live }, index) => (
          <div key={title + index} className="project-card">
            <div className="card-image">
              <img className="object-cover" src={image} alt="" />
            </div>

            <div className="card-title">
              <h4 className="text-sky-500">{title}</h4>
            </div>

            <div className="line-seperator"></div>

            <div className="card-desc">
              <p>{desc}</p>
            </div>

            <div className="stack">
              <h6 className="mx-auto text-sky-500 text-center">stack</h6>
              <div className="stack-list flex justify-evenly items-center">
                {stack.map((item, i) => (
                  <p key={item + i}>{item}</p>
                ))}
              </div>
            </div>

            <div className="card-btn-group">
              <a href={source}>
                {' '}
                <button className="btn source">source</button>
              </a>
              <a href={live}>
                {' '}
                <button className="btn live">live</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="section_divider"></div>
    </section>
  );
};

export default Projects;
