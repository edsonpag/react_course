import React, { useState } from "react";

import "./Form.css";

function Form() {

    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: ""
    });

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    return (

        <form>
            <input
            type="text"
            placeholder="first name"
            onChange={handleChange}
            name="firstName">
            </input>

            <input
            type="text"
            placeholder="last name"
            onChange={handleChange}
            name="lastName">
            </input>
        </form>
    );
}

export default Form;