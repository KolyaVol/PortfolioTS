import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	const amMaskStyles = {
		mask: {
			WebkitMaskPosition: `10rem 10rem`,
		},
	};
	return (
		<main className="about-me">
			<div className="about-me__left-photo">
				<img
					style={amMaskStyles.mask}
					className="about-me__left-mask"
					src="../images/homeImg.png"
					alt="look at me"
				/>
			</div>
			<p className="about-me__description words">{lang.myStory}</p>
			<div className="about-me__right-photo"></div>
		</main>
	);
}
