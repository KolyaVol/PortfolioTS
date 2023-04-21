import { useAppSelector } from "../../hooks/redux";
import ProjectItem from "../UI/MyCheckBox/ProjectItem/ProjectItem";
import "./ProjectList.css";

export default function ProjectList() {
	const {
		myProjectsTitle,
		prItemButton,
		dataMolaDescr,
		itlogyDescr,
		webshopDescr,
	} = useAppSelector((state) => state.langReducer.lang);
	const myProjectsArr = [
		{
			description: dataMolaDescr,
			src: "./DataMola.png",
			url: "https://kolyavol.github.io/DataMola/",
		},
		{
			description: itlogyDescr,
			src: "./ItLogy.png",
			url: "https://kolyavol.github.io/car-hw/",
		},
		{
			description: webshopDescr,
			src: "./WebShop.png",
			url: "https://github.com/KolyaVol",
		},
	];
	return (
		<section className="project-list__container" id="projects">
			<h2 className="project-list__title">{myProjectsTitle}</h2>
			<div className="project-list__template">
				{myProjectsArr.map((item) => (
					<ProjectItem
						children={`${item.description}`}
						src={item.src}
						url={item.url}
						key={item.url}
					></ProjectItem>
				))}
			</div>
		</section>
	);
}
