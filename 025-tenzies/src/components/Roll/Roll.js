import React from "react";

import "./Roll.css";

function Roll(props) {

    return (
        <button className="roll" onClick={props.rollDice}>Roll</button>
    );
}

export default Roll;