import SkillProgressBar from "../UI/SkillProgressBar/SkillProgressBar";
import "./MySkills.css";

export default function MySkills() {
	return (
		<ul className="skills">
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
	);
}
