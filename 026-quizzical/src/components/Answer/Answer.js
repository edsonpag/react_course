import React from "react";

import "./Answer.css";

function Answer(props) {

    function checkAnswer() {
        if(props.correctAnswer === props.answer) {
            if(props.correctAnswer !== props.selectedAnswer.answer) {
                return "correct";
              } else {
                  return "answered";
              }
        } else if(props.answer === props.selectedAnswer.answer) {
            return "answered";
        } else {
            return "incorrect";
        }
        
    }

    return (
        <div className="answer-container">
            {props.hasSubmit 
            ?
                <button className={`answer-btn
                ${checkAnswer()}`}
                >
                    {props.answer}
                </button>
            :
                <button
                className={`answer-btn ${props.answerId === props.selectedAnswer.id ? "selected" : ""}`}
                onClick={() => props.handleClick(props.questionId, props.answerId)}
                >
                    {props.answer}
                </button>
            }
            
        </div>
    );
}

export default Answer;