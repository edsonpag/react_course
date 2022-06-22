import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./Navbar.scss";

function Navbar() {

    return (
        <nav className="navigation-container">
            <Link className="logo-container" to="/">
                <CrownLogo className="logo"/>
            </Link>

            <ul className="navigation-links">
                <Link className="navigation-link" to="/shop">
                    Shop
                </Link>

                <Link className="navigation-link" to="/contact">
                    Contact
                </Link>

                <Link className="navigation-link" to="sign-in">
                    Sign In
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;