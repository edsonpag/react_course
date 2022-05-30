import React from "react";

import "./Roll.css";

function Roll(props) {

    return (

        <button
        className="roll"
        onClick={props.tenzies ? props.newGame : props.rollDice}>
            {props.tenzies ? "New Game" : "Roll"}
        </button>
    );
}

export default Roll;