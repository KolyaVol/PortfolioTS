import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";

import "./Header.css";
import Nav from "../UI/Nav/Nav";

export default function Header() {
	const [clientXY, setClientXY] = useState({ x: -1, y: -1 });

	const lang = useAppSelector((state) => state.langReducer.lang);

	const mouseMoveHandler = (e: any) => {
		setClientXY({ x: (e.pageX * 0.8) / 8, y: (e.pageY * 0.8) / 8 });
	};
	const mouseLeaveHandler = () => {
		setTimeout(() => {
			setClientXY({ x: 0, y: 0 });
		}, 1000);
	};

	return (
		<header id="header">
			<div className="nav-box">
				<a href="#header" className="logo">
					<img src="./logo.svg" alt="logo" />
				</a>
				<Nav />
			</div>

			<figure className="header__figure">
				<img
					className="header__img"
					src="./myPhoto.jpg"
					alt="its me!"
					onMouseMove={(e) => mouseMoveHandler(e)}
					onMouseLeave={() => {
						mouseLeaveHandler();
					}}
					style={{ transform: `translate(${clientXY.x}px, ${clientXY.y}px)` }}
				/>
				<figcaption className="header__figcaption words">
					<h2>{lang.hello}</h2>
					<h1>
						{lang.myName}
						<br />
						{lang.mySurname}
					</h1>
					<h3>{lang.firstWords}</h3>
				</figcaption>
			</figure>
		</header>
	);
}
