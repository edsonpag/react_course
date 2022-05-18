import React from "react";

import "./Header.css";

function Header() {

    return(
        <header>
            <div className="col-a">
                <img src="images/troll-face.png" alt="Troll Face" className="logo" />
                <h4 className="title">Meme Generator</h4>
            </div>

            <div className="col-b">
                <p>React Course - Project 3</p>
            </div>
        </header>
    );
}

export default Header;