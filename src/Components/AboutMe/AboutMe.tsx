import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector(state=>state.langReducer.lang)
	return (
		<main className="about-me">
			<div className="about-me__left-photo"></div>
			<p className="about-me__description words">{lang.myStory}</p>
			<div className="about-me__right-photo"></div>
		</main>
	);
}
