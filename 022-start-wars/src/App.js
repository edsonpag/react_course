import React, { useState, useEffect } from "react";

import './App.css';

function App() {

  const [ starWarsData, setStarWarsData ] = useState({});
  const [ count, setCount ] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`https://swapi.dev/api/people/${count}`);
      response = await response.json();
  
      setStarWarsData(response);
    }

    fetchData();
   
  }, [count]);


  function next() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <div className="App">
      {JSON.stringify(starWarsData)}
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
