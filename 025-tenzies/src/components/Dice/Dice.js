import React from "react";
import { nanoid } from "nanoid";

import "./Dice.css";

function Dice(props) {

    const root = document.querySelector(":root");
    const rootStyle = getComputedStyle(root);

    const styles = {
        backgroundColor: props.isHeld 
        ? rootStyle.getPropertyValue("--dice-green-background-color") 
        : "white"
    }

    const dotsElements = [];

    for(let i = 0; i < props.value; i++) {
         dotsElements.push(<div key={nanoid()} className="dots"></div>);
    }

    return (
        <div className="dice" style={styles} onClick={() => props.holdDice(props.id)}>
            <div className="dice-number">
                {dotsElements}
            </div>
        </div>

    );
}

export default Dice;