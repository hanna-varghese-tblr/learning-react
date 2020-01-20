import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import ThirdComponent from './ThirdComponent';
import Friends from './Friends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Hello World :)</h2>
        <h3>Last viewed time {new Date().toLocaleTimeString()}</h3>
        
        <Friends></Friends>
        <FirstComponent passedData="this is the data passed from app js file." ></FirstComponent>
        <ThirdComponent passedData="this is the data passed from app js file to third component" ></ThirdComponent>
      </header>
    </div>
  );
}

export default App;
