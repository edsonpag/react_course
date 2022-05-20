import React, { useState } from "react";

import "./Form.css";

function Form() {

    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });


    function handleChange(event) {

        const { name, value, type, checked } = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    console.log(formData)

    return (

        <form>
            <input
            type="text"
            placeholder="first name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />

            <input
            type="text"
            placeholder="last name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />

            <input
            type="email"
            placeholder="type your email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            />

            <textarea
            placeholder="Comments"
            onChange={handleChange}
            name="comments"
            value={formData.comments}
            />

            <input 
            type="checkbox"
            name="isFriendly"
            id="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            />

            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                type="radio"
                name="employment"
                id="unemployed"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>

                <input 
                type="radio"
                name="employment"
                id="part-time"
                value="part-time"
                checked={formData.employment === "part-time"}
                onChange={handleChange}
                />
                <label htmlFor="part-time">Part Time</label>

                <input 
                type="radio"
                name="employment"
                id="full-time"
                value="full-time"
                checked={formData.employment === "full-time"}
                onChange={handleChange}
                />
                <label htmlFor="full-time">Full Time</label>
            </fieldset>

            <div className="select-container">
                <label htmlFor="favColor">What is your favorite color?</label>
                <select
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="blue">blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
        </form>
    );
}

export default Form;