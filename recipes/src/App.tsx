import React from 'react';

import './App.css';
import hachiImg from './assets/hachi.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hachiImg}  alt="img" />
        <h2>Welcome!</h2>
      </header>
    </div>
  );
}

export default App;
