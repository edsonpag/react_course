import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ counter, setCounter ] = useState(0);

  function handleCounter() {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    })
  }

  useEffect(() => {
    console.log("Eu vou rodar vez que o counter mudar")
  }, [counter]);

  useEffect(() => {
    console.log("Eu vou rodar apenas uma vez")
  }, []);

  return (
    <div className="App">
      <button onClick={handleCounter}>Counter btn</button>
      <p>{counter}</p>
    </div>
  );
}

export default App;
