import React from 'react';

import Project from './project';

import INFO from '../../data/user';

import './styles/allProjects.css';

const AllProjects = () => (
  <div className="all-projects-container">
    {INFO.projects.map((project, index) => (
      <div className="all-projects-project" key={index}>
        <Project
          logo={project.logo}
          logo2={project.logo2}
          logo3={project.logo3}
          title={project.title}
          image={project.image}
          projectCover={project.projectCover}
          description={project.description}
          linkText={project.linkText}
          link={project.link}
		  sourceText={project.sourceText}
		  linkSource={project.sourceLink}
        />
      </div>
    ))}
  </div>
);

export default AllProjects;
