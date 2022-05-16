import React from "react";

import Cats from "../../database/db.json";

import "./Cat.css";

function Cat() {
    return (
        <div className="cat-container">
            {
                Cats.map((cat) => {
                    return (
                        <div className="cat-card">
                            <img src={cat.img} alt={cat.name} className="cat-card-image"/>
                            <h3 className="cat-card-name">{cat.name}</h3>
                            <p className="cat-card-phone">{cat.phone}</p>
                            <p className="cat-card-email">{cat.email}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Cat;