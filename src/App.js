import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './redux/counter';

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h3>{count}</h3>
      </header>
      <button onClick={ () => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default App;
