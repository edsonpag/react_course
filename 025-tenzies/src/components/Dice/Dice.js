import React from "react";

import "./Dice.css";

function Dice(props) {

    const root = document.querySelector(":root");
    const rootStyle = getComputedStyle(root);

    const styles = {
        backgroundColor: props.isHeld 
        ? rootStyle.getPropertyValue("--dice-green-background-color") 
        : "white"
    }

    return (
        <div className="dice" style={styles} onClick={() => props.holdDice(props.id)}>
            <p className="dice-number">{props.value}</p>
        </div>

    );
}

export default Dice;