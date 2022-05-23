import React from "react";

import "./Header.css";

function Header() {

    return (
        <header className="header">
            <img 
            src="images/img_avatar.png"
            alt="Profile"
            className="profile-photo"
            />

            <i className="bi bi-twitter twitter-icon"></i>

            <i className="bi bi-stars stars-icon"></i>
        </header>
    );
}

export default Header;