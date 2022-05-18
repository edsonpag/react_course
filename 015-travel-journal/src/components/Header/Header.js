import React from "react";

import "./Header.css";

function Header() {

    return(
        <header>
            <img src="images/logo.png" alt="Site logo" className="logo"/>
            <h4 className="title">my travel journal.</h4>
        </header>
    );
}

export default Header;