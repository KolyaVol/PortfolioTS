import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import "./AboutMe.css";

export default function AboutMe() {
	const lang = useAppSelector((state) => state.langReducer.lang);

	const [leftMousePos, setLeftMousePos] = useState({ x: -100, y: -100 });
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	let offsetX: any;

	screenWidth > 1900
		? (offsetX = 0.22 * screenWidth)
		: screenWidth > 1500
		? (offsetX = 0.23 * screenWidth)
		: screenWidth > 1000
		? (offsetX = 0.245 * screenWidth)
		: screenWidth > 500
		? (offsetX = 0.265 * screenWidth)
		: (offsetX = 0.365 * screenWidth);

	function watchMouseMove(e: any) {
		setLeftMousePos({
			x: e.pageX - offsetX,
			y: e.pageY - 1.1 * screenHeight,
		});
	}

	return (
		<section className="about-me" id="about-me">
			<div onMouseMove={(e) => watchMouseMove(e)} className="about-me__photo">
				<img
					style={{
						WebkitMaskPosition: `${leftMousePos.x}px ${leftMousePos.y}px`,
					}}
					className="about-me__mask"
					src="./homeImg.png"
					alt="look at me"
				/>
			</div>
			<p className="about-me__description words">{lang.myStory} </p>
		</section>
	);
}
