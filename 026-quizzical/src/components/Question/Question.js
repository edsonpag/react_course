import React, { useState } from "react";

import Answer from "../Answer/Answer";

import "./Question.css";

function Question(props) {
    
    // faz um map nas repostas
    const answersElement = props.answers.map(answer => {
        return (
            <Answer 
            key={answer.id} 
            selectedAnswer={props.selectedAnswer} 
            questionId={props.questionId}
            answerId={answer.id}
            answer={answer.answer} 
            handleClick={props.handleClick}
            />
        );
    });

    return (
        <div className="question">
            <h4 className="question-title">{props.question}</h4>
            <div className="answers-container">
                {answersElement}
            </div>
        </div>
    );
}

export default Question;