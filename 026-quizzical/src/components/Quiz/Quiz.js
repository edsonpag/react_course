import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import apiRequest from "../../api/apiRequest";

import Question from "../Question/Question";

import "./Quiz.css";

function Quiz() {

    const [ questions, setQuestions ] = useState([
        {
            id: nanoid(),
            question: "How would one say goodbye in Spanish",
            answers: [
                {
                    id: nanoid(),
                    answer: "Adiós"
                },
                {
                    id: nanoid(),
                    answer: "Hola"
                },
                {
                    id: nanoid(),
                    answer: "Au Rovoir"
                },
                {
                    id: nanoid(),
                    answer: "Salir" 
                }  
            ],
            selectedAnswer: {
                id: "",
                answer: ""
            }
        },

        {
            id: nanoid(),
            question: "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
            answers: [
                {
                    id: nanoid(),
                    answer: "Cabbage Patch Kids"
                },
                {
                    id: nanoid(),
                    answer: "Transformers"
                },
                {
                    id: nanoid(),
                    answer: "Care Bears"
                },
                {
                    id: nanoid(),
                    answer: "Rubik's Cube"
                }
            ],
            selectedAnswer: {
                id: "",
                answer: ""
            }
        }
    ]);

    function handleClick(questionId, answerId) {

        setQuestions(prevQuestions => {
            const selectedQuestion = prevQuestions.find((question) => {
                return question.id === questionId;
            });

            const selectedAnswer = selectedQuestion.answers.find((answer) => {
                return answer.id === answerId;
            });

            return prevQuestions.map(question => (
                question.id === selectedQuestion.id ? {...question, selectedAnswer} : {...question}
            ));

        });
    }

    const questionsElement = questions.map((question) => {
        return (
            <Question 
            key={question.id}
            questionId={question.id}
            question={question.question} 
            answers={question.answers}
            handleClick={handleClick}
            selectedAnswer={question.selectedAnswer}
            />
        );
    });

    return (
        <div className="questions-container">
            {questionsElement}
        </div>
    );
}

export default Quiz;