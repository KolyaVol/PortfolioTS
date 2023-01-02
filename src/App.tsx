import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { themeSlice } from "./store/reducers/ThemeSlice";
import Header from "./Components/Header/Header";
import MySkills from "./Components/MySkills/MySkills";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectList from "./Components/ProjectList/ProjectList";
import "./App.css";

function App() {
	const dispatch = useAppDispatch();
	const { theme } = useAppSelector((state) => state.themeReducer);
	const { toLightTheme } = themeSlice.actions;
	const { toDarkTheme } = themeSlice.actions;
	useEffect(() => {
		localStorage.getItem("theme")?
			dispatch(toDarkTheme()):
			dispatch(toLightTheme())
		}, []);

	return (
		<div className="app">
			<Header></Header>
			<AboutMe />
			<MySkills />
			<ProjectList />
		</div>
	);
}
export default App;
