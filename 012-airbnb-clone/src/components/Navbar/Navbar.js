import React from "react";

import "./Navbar.css";

import logo from "../../images/airbnb-logo.png";

function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Airbnb logo" title="Airbnb logo" className="logo"/>
            </nav>
        </header>
    );
}

export default Navbar;