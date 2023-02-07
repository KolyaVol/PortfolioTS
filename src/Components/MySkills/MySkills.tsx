import { useAppSelector } from "../../hooks/redux";
import SkillProgressBar from "../UI/SkillProgressBar/SkillProgressBar";
import SkillsSphere from "../UI/SkillsSphere/SkillsSphere";

import "./MySkills.css";

export default function MySkills() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	return (
		<section className="skills">
			<h2>{lang.mySkills}</h2>
			<SkillsSphere/>
			<ul className="skills__list">
				<li>
					HTML5
					<SkillProgressBar cssClass="html5" disactive="" />
				</li>
				<li>
					CSS3
					<SkillProgressBar cssClass="css3" disactive="" />
				</li>
				<li>
					Responsive design
					<SkillProgressBar cssClass="Responsive" disactive="" />
				</li>
				<li>
					Git
					<SkillProgressBar cssClass="Git" disactive="" />
				</li>
				<li>
					JavaScript
					<SkillProgressBar cssClass="JavaScript" disactive="" />
				</li>
				<li>
					npm
					<SkillProgressBar cssClass="npm" disactive="" />
				</li>
				<li>
					NodeJS
					<SkillProgressBar cssClass="NodeJS" disactive="" />
				</li>
				<li>
					ReactJS
					<SkillProgressBar cssClass="ReactJS" disactive="" />
				</li>
				<li>
					TypeScript
					<SkillProgressBar cssClass="TypeScript" disactive="" />
				</li>
			</ul>
		</section>
	);
}
