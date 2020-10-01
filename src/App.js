import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
          <br></br>
          <br></br>
          To deploy to firebase:
          <br></br>make sure you have installed firebase tools via<br></br><br></br>
          <code>npm install -g firebase-tools</code><br></br><br></br>and run 
          <br></br><br></br><code>firebase login</code><br></br><br></br> Once that is set up, you only
          ever need to run <br></br><br></br><code>firebase deploy</code><br></br><br></br>in the
          terminal. Website should update shortly
        </p>
        
      </header>
    </div>
  );
}

export default App;
