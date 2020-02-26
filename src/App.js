import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>JSPanther</code> have fun.
        </p>
        <a
          className="App-link"
          href="https://www.jspanther.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goto JSPanther
        </a>
      </header>
    </div>
  );
}

export default App;
