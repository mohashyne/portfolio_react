import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './styles/project.css';

const Project = (props) => {
  const {
    logo, logo2, logo3, title, description, linkText, link,
  } = props;

  return (
    <>
      <div className="project">
        <Link to={link}>
          <div className="project-container">
            <div className="project-logo">
              <img src={logo} alt="logo" />
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
            </div>
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="project-link project-link-button">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faLink} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </div>
		  <div className="project-sourcelink">
                <FontAwesomeIcon icon={faLink} />
              </div>
        </Link>
      </div>
    </>
  );
};

export default Project;
