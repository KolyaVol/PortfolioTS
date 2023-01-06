import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { switcherSlice } from "../../store/reducers/SwitcherSlice";
import { langSlice } from "../../store/reducers/LangSlice";
import MyCheckBox from "../UI/MyCheckBox/MyCheckBox";
import "./Header.css";

export default function Header() {
	const dispatch = useAppDispatch();
	const { isDark, isRus } = useAppSelector((state) => state.switcherReducer);
	const { toLightTheme, toDarkTheme, toRu, toEn } =
		switcherSlice.actions;

	const lang = useAppSelector((state) => state.langReducer.lang);
	const { toRuLang, toEnLang } = langSlice.actions;

	useEffect(() => {
		localStorage.getItem("theme")
			? dispatch(toDarkTheme())
			: dispatch(toLightTheme());

		localStorage.getItem("lang")
			? dispatch(toRu()) 
			: dispatch(toEn());
	});

	useEffect(() => {
		localStorage.getItem("lang")?
		dispatch(toRuLang()):
		dispatch(toEnLang())
	}, [])

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
			dispatch(toEnLang());
			localStorage.removeItem("lang");
		} else {
			dispatch(toRuLang());
			localStorage.setItem("lang", "ru");
		}
	};

	return (
		<header>
			<nav>
				<ul className="nav__list">
					<li className="logo">LOGO</li>
					<li>{lang.aboutMe}</li>
					<li>{lang.myProjects}</li>
					<li>{lang.contacts}</li>
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
				<img className="header__img" src="" alt="look at me" />
				<figcaption className="header__figcaption">
					<h2>{lang.hello}</h2>
					<h1>
						{lang.myName}
						<br />
						{lang.mySurname}
					</h1>
					<h3>
						{lang.firstWords}
					</h3>
				</figcaption>
			</figure>
		</header>
	);
}
