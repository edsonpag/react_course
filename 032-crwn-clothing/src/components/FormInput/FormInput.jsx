import React from "react";

import "./FormInput.scss";

function FormInput({ label, id, ...otherProps }) {

    return (
        <div className="group">
            <input
            id={id}
            className="form-data-input"
            {...otherProps}
            />

            {label && 
            <label 
            htmlFor={id} 
            className={`form-data-label ${otherProps.value.length > 0 && "shrink"}`}
            >
                {label}
            </label>
            }   
        </div>
    );
}

export default FormInput;