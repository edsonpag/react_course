import React, { useState } from 'react';

import './App.css';

import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

function App() {

  const [ isStarted, setIsStarted ] = useState(false);

  function start() {
    setIsStarted(true);
  }

  return (
    <div className="app">
      {isStarted
      ? 
        <Quiz />
      :
        <Home start={start}/>
      }
      
    </div>
  );
}

export default App;
