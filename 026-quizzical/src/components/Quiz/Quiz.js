import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import apiRequest from "../../api/apiRequest";

import Question from "../Question/Question";

import "./Quiz.css";

function Quiz() {

    const [ questions, setQuestions ] = useState([]);
    const [ numberOfCorrectAnswers, setNumberOfCorrectAnswers ] = useState(0);
    const [ hasSubmit, setHasSubmit ] = useState(false);
    const [ newApiRequest, setNewApiRequest ] = useState(false);

    // api request
    useEffect(() => {
        apiRequest()
        .then((response) => {

            // transformo a resposta
            const serializedData = response.map((item) => {
                const allAnswers = [...item.incorrect_answers];

                // posição aleatoria da resposta correta
                const position = Math.floor(Math.random() * (allAnswers.length + 1));
                allAnswers.splice(position, 0, item.correct_answer);

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
                    type: item.type,
                }
            });

            setQuestions(serializedData);
        })
        .catch((error) => {
            console.log(error);
        });

    }, [newApiRequest]);

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

    // checa se todas as perguntas foram respondidas
    function checkIfAllQuestionsHaveAnAnswer() {
        let allQuestionsHaveAnswer = true;

        questions.forEach((question) => {
            if(question.selectedAnswer.id === "") {
                allQuestionsHaveAnswer = false;
            }
        });

        return allQuestionsHaveAnswer;
    }

    //  avisa que a resposta foi enviada
    function handleSubmit(event) {        
        if(!checkIfAllQuestionsHaveAnAnswer()) {
            alert("Responda todas as perguntas");
            return;
        }

        handleNumberOfCorrectAnswers();
        setHasSubmit(true);
    }

    // reinicia o jogo
    function playAgain() {
        setNewApiRequest(prevNewApiRequest => {
            return !prevNewApiRequest;
        });
        setNumberOfCorrectAnswers(0);
        setHasSubmit(false);
        
    }

    // monitora a quantidade de respostas certas
    function handleNumberOfCorrectAnswers() {
        let correctAnswers = 0;

        questions.forEach((question) => {
            if(question.correct_answer === question.selectedAnswer.answer) {
                correctAnswers++;
            }
        });

        setNumberOfCorrectAnswers(correctAnswers);
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
            correctAnswer={question.correct_answer}
            hasSubmit={hasSubmit}
            />
        );
    });

    return (
        <div className="quiz-container">
            <div className="questions-container">
                {questionsElement}
            </div>

            {hasSubmit 
            ?
                <div className="play-again-container"> 
                    <span className="score">Você acertou {numberOfCorrectAnswers}/{questions.length} questões</span>
                    <button 
                    className="btn"
                    onClick={playAgain}
                    >
                        Jogar novamente
                    </button>
                </div>
            :
                <button
                type="submit"
                className="btn"
                onClick={handleSubmit}
                >
                    Verificar respostas
                </button>
            }
            
        </div>
    );
}

export default Quiz;