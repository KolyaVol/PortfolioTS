import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const {count} = useAppSelector(state=>state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch
  return (
    <div className="App">
      {count}
    </div>
  );
}
export default App;
