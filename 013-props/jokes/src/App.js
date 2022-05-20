import React from "react";

import "./App.css";

import Joke from "./components/Joke/Joke";
import jokesData from "./components/Joke/JokesData.json";


function App() {
    const jokesElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} key={joke.setup} />
    });

    return (
        <div className="jokes-container">
            {jokesElements}
        </div>
        
    );
}

export default App;