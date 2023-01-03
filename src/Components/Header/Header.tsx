import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { themeSlice } from "../../store/reducers/ThemeSlice";
import MyCheckBox from "../UI/MyCheckBox/MyCheckBox";
import "./Header.css";

export default function Header() {
	const dispatch = useAppDispatch();
	const { isDark } = useAppSelector((state) => state.themeReducer);
	const { toLightTheme } = themeSlice.actions;
	const { toDarkTheme } = themeSlice.actions;

	useEffect(() => {
		localStorage.getItem("theme")
			? dispatch(toDarkTheme())
			: dispatch(toLightTheme());
	}, []);

	const themeSwitch = () => {
		if (isDark) {
			dispatch(toLightTheme());
			localStorage.removeItem("theme");
		} else {
			dispatch(toDarkTheme());
			localStorage.setItem("theme", "dark");
		}
	};

	return (
		<header>
			<nav>
				<ul className="nav__list">
					<li className="logo">LOGO</li>
					<li>ABOUT ME</li>
					<li>MY PROJECTS</li>
					<li>CONTACTS</li>
					<li className="swithces">
						<MyCheckBox title={"EN"} />
						<MyCheckBox
							title={isDark ? "Dark" : "Light"}
							state={isDark}
							handler={themeSwitch}
						/>
					</li>
				</ul>
			</nav>

			<figure className="header__figure">
				<img className="header__img" src="" alt="look at me" />
				<figcaption className="header__figcaption">
					<h2>Hello!</h2>
					<h1>
						I'm Nikolai
						<br />
						Valoshchik
					</h1>
					<h3>
						I've been doing front-end and some back-end development for a year
						now. Do you need a responsive website, SPA, or maybe a deploing your
						app? Then contact me
					</h3>
				</figcaption>
			</figure>
		</header>
	);
}
