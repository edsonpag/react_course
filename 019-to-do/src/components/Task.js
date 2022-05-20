import React from "react";

import "./Task.css";

function Task({ task, handleCheboxChange }) {

    return (
        <div className="task-container">
            <div className="task-btns">
                <input 
                type="checkbox"
                className="task-checkbox"
                checked={task.isFinished}
                onChange={() => handleCheboxChange(task.id)}
                />
                <i className="bi bi-pencil-square task-edit-icon"></i>
                <i className="bi bi-trash2 task-delete-icon"></i>
            </div>

            <div className="task-text-container">
                <p className="task-text">
                    { task.isFinished ? <s>{task.task}</s> : <span>{task.task}</span>}
                </p>
            </div>
        </div>        
    );
}

export default Task;