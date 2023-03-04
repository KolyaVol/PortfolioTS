import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import ProjectItem from "../UI/MyCheckBox/ProjectItem/ProjectItem";
import "./ProjectList.css";

export default function ProjectList() {
	const { myProjectsTitle, prItemButton } = useAppSelector(
		(state) => state.langReducer.lang
	);
	const myProjectsArr = [
		{
			description: `There is some information about current web-app thats i've created. If you want to see it - just click on button`,
			src: "../images/DataMola.png",
			url: "https://kolyavol.github.io/DataMola/",
		},
		{
			description: `There is some information about current web-app thats i've created. If you want to see it - just click on button`,
			src: "../images/ItLogy.png",
			url: "https://kolyavol.github.io/car-hw/",
		},
		{
			description: `There is some information about current web-app thats i've created. If you want to see it - just click on button`,
			src: "../images/WebShop.png",
			url: "https://github.com/KolyaVol",
		},
	];
	return (
		<section className="project-list__container" id="projects">
			<h2 className="project-list__title">{myProjectsTitle}</h2>
			<div className="project-list__template">
				{myProjectsArr.map((item) => (
					<ProjectItem
						children={`${item.description} "${prItemButton}"`}
						src={item.src}
						url={item.url}
						key={item.url}
					></ProjectItem>
				))}
			</div>
		</section>
	);
}
