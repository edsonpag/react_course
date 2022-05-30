import React from "react";

import "./Roll.css";

function Roll(props) {

    return (
        <div className="roll-container">
            <button
            className="roll"
            onClick={props.tenzies ? props.newGame : props.rollDice}>
                {props.tenzies ? "New Game" : "Roll"}
            </button>
            {props.rolls !== 0 && <p className="roll-counter">Roll counter: {props.rolls}</p>}
        </div>
    );
}

export default Roll;