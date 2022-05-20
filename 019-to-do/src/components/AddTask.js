import React, { useState } from "react";

import "./AddTask.css";

function AddTask(props) {
    const [ formData, setFormData ] = useState({
        task: "",
        isFinished: false
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addNewTask(formData);
        setFormData({
            task: "",
            isFinished: false
        });
    }

    return (
        <div className="add-task-container">
            <form onSubmit={handleSubmit} className="add-task-form">
                <input 
                type="text"
                placeholder="Digite sua tarefa aqui"
                className="add-task-input"
                name="task"
                value={formData.task}
                onChange={handleChange}
                required
                />

                <button className="add-task-btn">
                    <i className="bi bi-plus"></i>
                </button>
            </form>
        </div>
    );
}

export default AddTask;