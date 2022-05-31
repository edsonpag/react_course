import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import apiRequest from "../../api/apiRequest";

import Question from "../Question/Question";

import "./Quiz.css";

function Quiz() {

    const [ questions, setQuestions ] = useState([]);

    // api request
    useEffect(() => {
        apiRequest()
        .then((response) => {

            // transformo a resposta
            const serializedData = response.map((item) => {
                const allAnswers = [...item.incorrect_answers, item.correct_answer];
                
                const answers = allAnswers.map((answer) => {
                    return {
                        id: nanoid(),
                        answer
                    }   
                });

                return {
                    id: nanoid(),
                    question: item.question,
                    answers: answers,
                    selectedAnswer: {
                        id: "",
                        answer: ""
                    },
                    category: item.category,
                    difficulty: item.difficulty,
                    correct_answer: item.correct_answer,
                    incorrect_answers: item.incorrect_answers,
                    type: item.type
                }
            });

            setQuestions(serializedData);
        })
        .catch((error) => {
            console.log(error);
        });

    }, []);

    // quando é clicado, define qual é o atual resposta selecionada
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

    //  quando é enviado os dados, verifica se as respostas estão corretas 
    function handleSubmit(event) {
        event.preventDefault();
        // validar se todas as opções estão selecionadas
        console.log(questions);
    }

    // faz um map no array de questões
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
        <div className="quiz-container">
            <div className="questions-container">
                {questionsElement}
            </div>

            <button
            type="submit"
            className="submit-btn"
            onClick={handleSubmit}
            >
                Verificar respostas
            </button>
        </div>
    );
}

export default Quiz;