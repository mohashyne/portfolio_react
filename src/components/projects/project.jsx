import React from "react";
import "./styles/project.css";

const Project = (props) => {
	const { logo, logo2, logo3, title, description, link, linkSource,image } = props;

	return (
		<React.Fragment>
			<div className="project">
				
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
							<img src={logo2} alt="logo" />
							<img src={logo3} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-image">
							<img src={image} alt="project_image" />
						</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
                  <div className="project-btn">
										<a href={linkSource} target="_blank" rel="noopener noreferrer" className="source-project-button">
												View Source
										</a>
										<a href={link} target="_blank" rel="noopener noreferrer" className="view-project-button">
                       View Project
                    </a>

									</div>    
                  

									
                </div>
					</div>
				
			</div>
		</React.Fragment>
	);
};

export default Project;
