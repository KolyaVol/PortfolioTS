import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useResize } from "../../../hooks/useResize";

import { switcherSlice } from "../../../store/reducers/SwitcherSlice";
import { langSlice } from "../../../store/reducers/LangSlice";

import MyCheckBox from "../../UI/MyCheckBox/MyCheckBox";

import "./Nav.css";

export default function Nav() {
	const dispatch = useAppDispatch();

	const { isDark, isRus } = useAppSelector((state) => state.switcherReducer);
	const { toLightTheme, toDarkTheme, toRu, toEn } = switcherSlice.actions;

	const lang = useAppSelector((state) => state.langReducer.lang);
	const { toRuLang, toEnLang } = langSlice.actions;
	const words = Array.from(document.querySelectorAll(".words"));

	const [isNavOpen, setIsNavOpen] = useState(false);
	const deviceWidth = useResize();

	useEffect(() => {
		isDark
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");
	}, [isDark]);

	useEffect(() => {
		localStorage.getItem("theme")
			? dispatch(toDarkTheme())
			: dispatch(toLightTheme());
		localStorage.getItem("lang") ? dispatch(toRu()) : dispatch(toEn());
	});

	useEffect(() => {
		localStorage.getItem("lang") ? dispatch(toRuLang()) : dispatch(toEnLang());
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

	const langSwitch = () => {
		if (isRus) {
			dispatch(toEn());
			words.map((item) => item.classList.add("transparent"));
			setTimeout(() => {
				dispatch(toEnLang());
				words.map((item) => item.classList.remove("transparent"));
			}, 500);
			localStorage.removeItem("lang");
		} else {
			dispatch(toRu());
			words.map((item) => item.classList.add("transparent"));
			setTimeout(() => {
				dispatch(toRuLang());
				words.map((item) => item.classList.remove("transparent"));
			}, 500);
			localStorage.setItem("lang", "ru");
		}
	};

	let navListStyle = "nav-list";
	if (deviceWidth > 768) navListStyle = "nav-list";
	else if (deviceWidth > 768 && isNavOpen)
		navListStyle = "nav-list mobile_active";
	else navListStyle = "nav-list mobile";

	if (isNavOpen) navListStyle = "nav-list mobile active";

	return (
		<>
			<section
				className={isNavOpen ? "mobile-burger active" : "mobile-burger "}
				onClick={() => setIsNavOpen(!isNavOpen)}
			>
				<div></div>
				<div></div>
				<div></div>
			</section>
			<nav>
				<ul className={navListStyle}>
					<li className="words">
						<a href="#skills">{lang.mySkills}</a>
					</li>
					<li className="words">
						<a href="#projects">{lang.myProjectsTitle}</a>
					</li>
					<li className="words">
						<a href="#contacts">{lang.contacts}</a>
					</li>
					<li className="swithces">
						<MyCheckBox
							title={isRus ? "Ru" : "En"}
							state={isRus}
							handler={langSwitch}
						/>
						<MyCheckBox
							title={isDark ? "Dark" : "Light"}
							state={isDark}
							handler={themeSwitch}
						/>
					</li>
				</ul>
			</nav>
		</>
	);
}
