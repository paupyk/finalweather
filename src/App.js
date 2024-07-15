import './App.css';
import React from 'react';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
        This project was coded by Kaylea Paup and is{" "}
        <a href="https://github.com/paupyk/finalweather" target="_blank">
          open-soucred on GitHub
        </a>
        </footer>
        </div>
    </div>
  );
}

export default App;
