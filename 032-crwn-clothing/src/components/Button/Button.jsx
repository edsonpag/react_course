import React from "react";

import "./Button.scss";

const BUTTON_TYPES = {
    default: "button-default",
    google: "google-sign-in",
    github: "github-sign-in",
    inverted: "inverted"
}

function Button({ text, buttonType, Icon, ...otherProps }) {
    return (
        <button
        className={`${BUTTON_TYPES[buttonType]}`}
        {...otherProps}
        >
            {Icon && <Icon />}
            {text}
        </button>
    );
}

export default Button;