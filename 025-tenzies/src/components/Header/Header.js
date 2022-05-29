import React from 'react';
import "./Header.css";

function Header() {

    return (
        <header>
            <h3 className="title">Tenzies</h3>
            <p className="game-summary">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </header>
    );
}

export default Header;