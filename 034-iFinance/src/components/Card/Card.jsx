import React from "react";

import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as Dollar } from "../../assets/Dollar.svg";

import "./Card.scss";

function Card(props) {

    function displayIcon() {
        if(props.title === "entrada") {
            return (
                <ArrowUp />
            );
        } else if(props.title === "saida") {
            return (
                <ArrowDown />
            );
        } else {
            return (
                <Dollar />
            );
        }
    }

    return (
        <div className="card">
            <div className="row-a">
                <h4 className="card-title">{props.title}</h4>
                {displayIcon()}
            </div>
            <div className="row-b">
                <h4 className="card-amount">{props.amount.toFixed(2)} R$</h4>
            </div>
        </div>
    );
}

export default Card;