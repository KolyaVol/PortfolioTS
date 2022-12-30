import React from 'react';
import Header from './Components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './App.css'
import MySkills from './Components/MySkills/MySkills';

function App() {

  const {count} = useAppSelector(state=>state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch

  return (
    <div className="app">
      <Header></Header> 
      <MySkills/>
    </div>
  );
}
export default App;
