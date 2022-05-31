import React from "react";

import "./Answer.css";

function Answer(props) {

    return (
        <div className="answer-container">
            <button
            className={`answer-btn ${props.answerId === props.selectedAnswer.id ? "selected" : ""}`}
            onClick={() => props.handleClick(props.questionId, props.answerId)}
            >
                {props.answer}
            </button>
        </div>
    );
}

export default Answer;