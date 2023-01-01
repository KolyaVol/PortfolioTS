import Header from './Components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './App.css'
import MySkills from './Components/MySkills/MySkills';
import AboutMe from './Components/AboutMe/AboutMe';
import ProjectList from './Components/ProjectList/ProjectList';

function App() {

  const {count} = useAppSelector(state=>state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch

  return (
    <div className="app">
      <Header></Header> 
      <AboutMe/>
      <MySkills/>
      <ProjectList/>
    </div>
  );
}
export default App;
