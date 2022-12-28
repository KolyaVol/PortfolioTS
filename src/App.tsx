import React from 'react';
import Header from './Components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import './App.css'

function App() {

  const {count} = useAppSelector(state=>state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch

  return (
    <div className="app">
      <Header></Header> 
      
    </div>
  );
}
export default App;
