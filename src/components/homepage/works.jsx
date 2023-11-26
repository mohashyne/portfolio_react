import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./crystal.png"
								alt="crystal"
								className="work-image"
							/>
							<div className="work-title">Crystal Blue Tech</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./tcn.png"
								alt="tcn"
								className="work-image"
							/>
							<div className="work-title">Transmission  Company</div>
							<div className="work-subtitle">
								Head Of Dept(ICT)
							</div>
							<div className="work-duration">2014 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
