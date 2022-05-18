import React from "react";

import "./Card.css";

function Card({ card }) {
    let statusText;

    if(card.openSpots === 0) {
        statusText = "Sold Out";
    } else if(card.location === "Online") {
        statusText = "Online"
    }

    return (
            <div className="card">
                <div className="card-image-container">
                    {statusText && <p className="card-status">{statusText}</p>}
                    <img src={`images/${card.coverImg}`} alt="Katie Zaferes" className="card-image"/>
                </div>

                <div className="card-description">
                    <div className="line-1">
                        <img src="images/star.png" alt="star" className="card-star"/>
                        <p className="card-grade">{card.stats.rating}</p>
                        <p className="card-reviews">({card.stats.reviews})</p>
                        <p className="card-country">{card.location}</p>
                    </div>

                    <div className="line-2">
                        <p className="card-text">{card.title}</p>
                    </div>

                    <div className="line-3">
                        <p className="card-price">
                            <b>From {card.price}</b> / person
                        </p>
                    </div>
                </div> 
            </div>
    );
}

export default Card;