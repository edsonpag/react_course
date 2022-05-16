import React from "react";

import "./Card.css";

function Card(props) {
    return (
        <section className="card-container">
            <div className="card">
                <div className="card-image-container">
                    <p className="card-status">{props.status}</p>
                    <img src={props.cardImage} alt="Katie Zaferes" className="card-image"/>
                </div>

                <div className="card-description">
                    <div className="line-1">
                        <img src={props.cardStar} alt="star" className="card-star"/>
                        <p className="card-grade">{props.cardGrade}</p>
                        <p className="card-reviews">{props.cardReviews}</p>
                        <p className="card-country">{props.cardCountry}</p>
                    </div>

                    <div className="line-2">
                        <p className="card-text">{props.cardText}</p>
                    </div>

                    <div className="line-3">
                        <p className="card-price">
                            <b>{props.cardPrice}</b>
                            {props.cardPerson}
                        </p>
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default Card;