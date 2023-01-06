import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector(state=>state.langReducer.lang)
	return (
		<main className="aboutMe">
			<p className="description">
				{lang.myStory}
			</p>
		</main>
	);
}
