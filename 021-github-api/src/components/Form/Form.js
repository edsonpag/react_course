import React, { useState } from "react";


import "./Form.css";

function Form() {
    const [ formData, setFormData ] = useState({
        username: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formData.username);
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
            type="text"
            name="username"
            className="search-input"
            value={formData.username}
            onChange={handleChange}
            />

            <button className="search-btn">Search</button>
        </form>
    );
}

export default Form;