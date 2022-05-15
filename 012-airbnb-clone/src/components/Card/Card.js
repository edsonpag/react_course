import React from "react";

import "./Card.css";

import cardImage from "../../images/katie-zaferes.png";
import cardStar from "../../images/star.png";

function Card() {
    return (
        <section className="card-container">
            <div className="card">
                <div className="card-image-container">
                    <p className="card-status">sold out</p>
                    <img src={cardImage} className="card-image"/>
                </div>

                <div className="card-description">
                    <div className="line-1">
                        <img src={cardStar} className="card-star"/>
                        <p className="card-grade">5.0</p>
                        <p className="card-reviews">(6)</p>
                        <p className="card-country">USA</p>
                    </div>

                    <div className="line-2">
                        <p className="card-text">Life lessons with Katie Zaferes</p>
                    </div>

                    <div className="line-3">
                        <p className="card-price"><b>From $138</b> / person</p>
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default Card;