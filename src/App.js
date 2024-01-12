import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponents';
import PropsDemo from './components/PropsDemo';
import StateDemo from './components/StateDemo';
import { BrowserRouter as Router,
  Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function App(){
  // name : Nguyen Van A
  // age : 18
}