import React from "react";


import "./Card.css";

class Card extends React.Component {

    render() {

        const { id, name, email } = this.props;

        return (
            <div key={id} className="card">
                <img 
                alt={`monster ${name}`} 
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />

                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;