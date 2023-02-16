import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector((state) => state.langReducer.lang);
	const  [leftMousePos, setLeftMousePos]  = useState({x: -1, y:-1})
	const screenWidth = window.screen.width;
	const screenHeight = window.screen.height;
	function watchMouseMove(e: any) {
		setLeftMousePos({
			x: e.pageX - 0.28 * screenWidth,
			y: e.pageY - 1.255* screenHeight,
		});
		console.log(leftMousePos);
	}

	return (
		<main className="about-me">
			<div onMouseMove={(e) => watchMouseMove(e)} className="about-me__left-photo">
				<img
					style={{
						WebkitMaskPosition: `${leftMousePos.x}px ${leftMousePos.y}px`,
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
