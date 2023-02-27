import Header from "./Components/Header/Header";
import MySkills from "./Components/MySkills/MySkills";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectList from "./Components/ProjectList/ProjectList";
import { BrowserRouter } from "react-router-dom";
import Contacts from "./Components/Footer/Contacts";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Header></Header>
				<AboutMe />
				<MySkills />
				<ProjectList />
				<Contacts />
			</div>
		</BrowserRouter>
	);
}
export default App;
