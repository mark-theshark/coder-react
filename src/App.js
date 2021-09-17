import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
        <span role="img" aria-labelledby="test">👋</span> Hey there ... This is a Dev URL.
        </p>   
        <p>
        It listens for a running app on a specific port, and allows engineers to test and share their running app with peers.
        </p>                         
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

