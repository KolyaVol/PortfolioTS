import { useAppSelector } from "../../hooks/redux";
import ProjectItem from "../UI/MyCheckBox/ProjectItem/ProjectItem";
import "./ProjectList.css";

export default function ProjectList() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	return (
		<section className="project-list__container">
			<h2 className="project-list__title">{lang.myProjects}</h2>
			<div className="project-list__template">
				<ProjectItem
					children="There is some information about current web-app thats i've created. If
					you want to see it - just click on button 'watch'"
					url="#"
				></ProjectItem>
			</div>
		</section>
	);
}
