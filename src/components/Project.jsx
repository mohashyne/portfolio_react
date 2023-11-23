import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="works-card" id="projects">
      <div className="overlay hidden"></div>
      <ul className="card-container">
        {projects.map((project, index) => (
          <li key={index} className="grid-container grid-container-desktop">
            <div className="card-container" id={`card-${index}`} data-aos="fade-right">
              <div>
                <img className="card-img" src={project.projectCover} alt={`photo of ${project.name}`} data-aos="zoom-in-left" />
              </div>

              <div className="text-container">
                <h2 className="card-title">{project.name}</h2>

                <div className="frame-two">
                  <p className="client">{project.client}</p>
                  <img src="./img/Counter.png" alt="Counter" />
                  <p className="role">{project.canopy[0]}</p>
                  <img src="./img/Counter.png" alt="Counter" />
                  <p className="role">{project.canopy[1]}</p>
                </div>

                <p className="card-description">{project.description}</p>

                <ul className="small-btn">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="tag-description">
                      {tech}
                    </li>
                  ))}
                </ul>

                <button type="button" className="project-btn desk-btn" onClick={() => openPopup(index)}>
                  See project
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
