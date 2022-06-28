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
                    Loja
                </Link>

                <Link className="navigation-link" to="/contact">
                    Contato
                </Link>

                <Link className="navigation-link" to="sign-in">
                    Entrar
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;