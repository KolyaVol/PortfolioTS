import { useRef } from "react";
import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	const inputRef = useRef();
	const clientMousePos = {x: -1, y: -1};
	function watchMouseMove(e:any) {
	
		clientMousePos.x = e.pageX
		clientMousePos.y = e.pageY
	}
	
	return (
		<main className="about-me">
			<div
				onMouseMove={(e) => watchMouseMove(e)}
				className="about-me__left-photo"
			>
				<img
					style={{
						WebkitMaskPosition: `${clientMousePos.x} ${
							clientMousePos.y
						}`,
					}}
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
