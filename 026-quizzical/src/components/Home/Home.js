import React from "react";

import "./Home.css";

function Home(props) {

    return (
        <div className="home">
            <h1 className="title">Quizzical</h1>
            <p className="description">Um simples quiz</p>
            <button className="start-btn" onClick={props.start}>Inicie o Quiz</button>
        </div>
    )
}

export default Home;