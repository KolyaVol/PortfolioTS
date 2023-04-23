import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switcherSlice } from "../../store/reducers/SwitcherSlice";
import { langSlice } from "../../store/reducers/LangSlice";
import MyCheckBox from "../UI/MyCheckBox/MyCheckBox";
import "./Header.css";

export default function Header() {
	const [clientXY, setClientXY] = useState({ x: -1, y: -1 });
	const [isNavOpen, setIsNavOpen] = useState(false);
	const dispatch = useAppDispatch();
	const { isDark, isRus } = useAppSelector((state) => state.switcherReducer);
	const { toLightTheme, toDarkTheme, toRu, toEn } = switcherSlice.actions;
	const deviceVidth = window.innerWidth;

	useEffect(() => {
		isDark
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");
	}, [isDark]);

	const lang = useAppSelector((state) => state.langReducer.lang);
	const { toRuLang, toEnLang } = langSlice.actions;

	const words = Array.from(document.querySelectorAll(".words"));

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
				<a href="#header" className="logo words">
					<img src="./logo.svg" alt="logo" />
				</a>
				<div
					className={isNavOpen ? "mobile-burger active" : "mobile-burger "}
					onClick={() => setIsNavOpen(!isNavOpen)}
				>
					<div ></div>
					<div ></div>
					<div ></div>
				</div>
				<nav>
					<ul
						className={
							deviceVidth > 750
								? "nav-list"
								: isNavOpen
								? "nav-list__mobile_active"
								: "nav-list__mobile"
						}
					>
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
