import { useAppSelector } from "../../hooks/redux";
import "./ProjectList.css";

export default function ProjectList() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	return (
		<main className="projectList__container">
			<h2 className="projectList__title">{lang.myProjects}</h2>
			<div className="projectList__template">
				<figure className="projectList__item">
					<div className="projectList__item__front"></div>
					<figcaption className="projectList__item__back">
						<p>
							There is some information about current web-app thats i've
							created. If you want to see it - just click on button 'watch'
						</p>
						<button />
					</figcaption>
				</figure>
				<figure className="projectList__item">
					<div className="projectList__item__front"></div>
					<figcaption className="projectList__item__back">
						<p>
							There is some information about current web-app thats i've
							created. If you want to see it - just click on button 'watch'
						</p>
						<button />
					</figcaption>
				</figure>
				<figure className="projectList__item">
					<div className="projectList__item__front"></div>
					<figcaption className="projectList__item__back">
						<p>
							There is some information about current web-app thats i've
							created. If you want to see it - just click on button 'watch'
						</p>
						<button />
					</figcaption>
				</figure>
				<figure className="projectList__item">
					<div className="projectList__item__front"></div>
					<figcaption className="projectList__item__back">
						<p>
							There is some information about current web-app thats i've
							created. If you want to see it - just click on button 'watch'
						</p>
						<button />
					</figcaption>
				</figure>
				<figure className="projectList__item">
					<div className="projectList__item__front"></div>
					<figcaption className="projectList__item__back">
						<p>
							There is some information about current web-app thats i've
							created. If you want to see it - just click on button 'watch'
						</p>
						<button />
					</figcaption>
				</figure>

			</div>
		</main>
	);
}
