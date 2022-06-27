import React, { useState } from "react";

import "./Form.scss";

function Form({ handleFormSubmit }) {

    const [ formData, setFormData ] = useState({
        description: "",
        value: "",
        type: ""
    });


    function handleChange(event) {
        let { name, value } = event.target;

        if(name === "value" && value) {
            value = parseFloat(value);
        }

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    return (
        <form className="form">
            <div className="description-container">
                <label htmlFor="description">Descrição</label>
                <input 
                id="description" 
                type="text" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                required
                />
            </div>

            <div className="value-container">
                <label htmlFor="value">Valor</label>
                <input 
                id="value"
                type="number" 
                min="0:00" 
                step="0.01"
                name="value"
                value={formData.value}
                onChange={handleChange}
                required
                />
            </div>

            <div className="type-container">
                <label htmlFor="entry">Entrada</label>
                <input 
                id="entry"
                name="type"
                type="radio"
                value="entry"
                checked={formData.type === "entry"}
                onChange={handleChange}
                />

                <label htmlFor="out">Saida</label>
                <input 
                id="out"
                name="type"
                type="radio" 
                value="out"
                checked={formData.type === "out"}
                onChange={handleChange}
                />
            </div>

            <button onClick={(event) => handleFormSubmit(event, formData)}>Adicionar</button>
        </form>
    );
}

export default Form;