import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switcherSlice } from "../../store/reducers/SwitcherSlice";
import { langSlice } from "../../store/reducers/LangSlice";
import MyCheckBox from "../UI/MyCheckBox/MyCheckBox";
import "./Header.css";

export default function Header() {
	const dispatch = useAppDispatch();
	const [clientXY, setClientXY] = useState({ x: -1, y: -1 });
	const { isDark, isRus } = useAppSelector((state) => state.switcherReducer);
	const { toLightTheme, toDarkTheme, toRu, toEn } = switcherSlice.actions;

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
			words.map((item) => {
				item.classList.add("transparent");
			});
			setTimeout(() => {
				dispatch(toEnLang());
				words.map((item) => {
					item.classList.remove("transparent");
				});
			}, 500);
			localStorage.removeItem("lang");
		} else {
			dispatch(toRu());
			words.map((item) => {
				item.classList.add("transparent");
			});
			setTimeout(() => {
				dispatch(toRuLang());
				words.map((item) => {
					item.classList.remove("transparent");
				});
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
	}

	return (
		<header>
			<nav>
				<ul className="nav__list">
					<li className="logo words">LOGO</li>
					<li className="words">
						<a href="#about-me">{lang.aboutMe}</a>
					</li>
					<li className="words">{lang.myProjects}</li>
					<li className="words">{lang.contacts}</li>
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

			<figure className="header__figure">
				<img
					className="header__img"
					src="../images/myPhoto.jpg"
					alt="look at me"
					onMouseMove={(e) => mouseMoveHandler(e)}
					onMouseLeave={() => {mouseLeaveHandler()}}
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
