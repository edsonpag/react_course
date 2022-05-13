import React from "react";

import "./Navbar.css";
import logo from "../images/react-logo.svg";

function Navbar() {

    return(
        <nav>
            <div className="col-a">
                <img src={logo} alt="React Logo" title="React Logo" className="logo"/>
                <h3>ReactFacts</h3>
            </div>

            <div className="col-b">
                <p>React Course - Project 1</p>
            </div>
            
        </nav>
    );
}

export default Navbar;