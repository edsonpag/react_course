import React from "react";

import Card from "../Card/Card";


import "./CardList.css";

class CardList extends React.Component {

    render() {
        
        const { monsters } = this.props;

        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card id={monster.id} name={monster.name} email={monster.email} />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
