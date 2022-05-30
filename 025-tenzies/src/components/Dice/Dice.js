import React from "react";

import "./Dice.css";

function Dice(props) {

    return (
        <div className="dice">
            <p className="dice-number">{props.value}</p>
        </div>
    );
}

export default Dice;