import { useAppSelector } from "../../hooks/redux";
import ProjectItem from "../UI/MyCheckBox/ProjectItem/ProjectItem";
import "./ProjectList.css";

export default function ProjectList() {
	const myProjects = useAppSelector(
		(state) => state.langReducer.lang.myProjects
	);
	return (
		<section className="project-list__container">
			<h2 className="project-list__title">{myProjects}</h2>
			<div className="project-list__template">
				<ProjectItem
					children="There is some information about current web-app thats i've created. If
					you want to see it - just click on button 'watch'"
					src="../images/DataMola.png"
					url="https://kolyavol.github.io/DataMola/"
				></ProjectItem>
				<ProjectItem
					children="There is some information about current web-app thats i've created. If
					you want to see it - just click on button 'watch'"
					src="../images/ItLogy.png"
					url="https://kolyavol.github.io/car-hw/"
				></ProjectItem>
				<ProjectItem
					children="There is some information about current web-app thats i've created. If
					you want to see it - just click on button 'watch'"
					src="../images/WebShop.png"
					url="https://github.com/KolyaVol"
				></ProjectItem>
				<ProjectItem
					children="There is some information about current web-app thats i've created. If
					you want to see it - just click on button 'watch'"
					src="../images/homeImg.png"
					url="https://kolyavol.github.io/DataMola/"
				></ProjectItem>
			</div>
		</section>
	);
}
