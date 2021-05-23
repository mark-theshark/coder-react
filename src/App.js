import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Developer (Dev) URLs allow you to access the web services you're developing in your workspace.
        </p>
        <p>
          Access control Dev URLs to only you, team members in your same Coder organization, in the same Coder cluster, or outside the cluster.  Administrators can specify the maximum access control level.
        </p>   
        <p>
          Dev URLs can be defined as code in a coder.yaml ( Workspaces as Code ), the CLI, or in the UI.
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

