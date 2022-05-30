import React, { useState } from 'react';

import './App.css';

import Home from './components/Home/Home';

function App() {

  const [ isStarted, setIsStarted ] = useState(false);

  function start() {
    setIsStarted(true);
  }

  return (
    <div className="app">
      {isStarted 
      ? <div>Ok</div>
      : <Home start={start}/>
      }
      
    </div>
  );
}

export default App;
