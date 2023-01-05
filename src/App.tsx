import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import Header from "./Components/Header/Header";
import MySkills from "./Components/MySkills/MySkills";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectList from "./Components/ProjectList/ProjectList";
import "./App.css";

function App() {
	
	const { isDark } = useAppSelector((state) => state.switcherReducer);
	
	

	useEffect(() => {
		isDark
			? document.body.classList.add("dark")
			: document.body.classList.remove("dark");
	}, [isDark]);

	
	

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
