import { useAppSelector } from "../../hooks/redux";
import SkillsSphere from "../UI/SkillsSphere/SkillsSphere";

import "./MySkills.css";

export default function MySkills() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	return (
		<section className="skills">
			<h2>{lang.mySkills}</h2>
			<SkillsSphere/>
		</section>
	);
}
