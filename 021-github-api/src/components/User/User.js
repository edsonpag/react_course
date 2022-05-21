import React from "react";

import "./User.css";

function User(props) {
    return (
        <div className="user-card">
            <img 
            src={props.user.avatar_url}
            alt="user avatar"
            className="user-avatar"
            />

            <h3 className="user-username">{props.user.login}</h3>
            <p className="user-repository-count">{props.user.repos} repositories</p>
        </div>
    );
}

export default User;