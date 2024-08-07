import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Define the questions and answers
const questions = [
    {
        question: "Which planet is known as the Earth's twin due to its similar size and mass?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which planet has the most extensive ring system?",
        options: ["Jupiter", "Uranus", "Saturn", "Neptune"],
        answer: "Saturn"
    },
    {
        question: "Which planet is the hottest in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which planet is known for having a Great Red Spot, a giant storm?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        answer: "Jupiter"
    },
    {
        question: "Which planet is the smallest in our solar system?",
        options: ["Mars", "Venus", "Mercury", "Pluto"],
        answer: "Mercury"
    },
    {
        question: "Which planet has the longest day, taking 243 Earth days to complete one rotation?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which planet is famous for its tilted axis, causing extreme seasonal changes?",
        options: ["Mars", "Saturn", "Neptune", "Uranus"],
        answer: "Uranus"
    },
    {
        question: "Which planet has a moon named Triton?",
        options: ["Saturn", "Uranus", "Jupiter", "Neptune"],
        answer: "Neptune"
    },
    {
        question: "Which planet's day is approximately 10 hours long?",
        options: ["Jupiter", "Saturn", "Mars", "Venus"],
        answer: "Jupiter"
    },
    {
        question: "Which planet has the tallest volcano in the solar system, Olympus Mons?",
        options: ["Earth", "Mars", "Venus", "Mercury"],
        answer: "Mars"
    }
];

const PlanetsQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])



    const handleAnswer = (answer) => {
        setUserAnswer(answer);
        setShowAnswer(true);
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setShowAnswer(false);
        setUserAnswer('');
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleRetakeQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswer('');
        setScore(0);
        setShowAnswer(false);
    };

    return (
        <div className="quiz-video-container">
            <video src='all-quiz.mp4' autoPlay muted playsInline loop className="background-video">
                Unable to Play video
            </video>
            <div className="quiz-container">
                <div className="q-container">
                    <h1>Quiz App</h1>
                    <hr />
                    {currentQuestion < questions.length ? (
                        <>
                            <h2>{questions[currentQuestion].question}</h2>
                            <ul>
                                {questions[currentQuestion].options.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => !showAnswer && handleAnswer(option)}
                                        className={
                                            showAnswer
                                                ? option === questions[currentQuestion].answer
                                                    ? 'correct'
                                                    : option === userAnswer
                                                        ? 'wrong'
                                                        : ''
                                                : ''
                                        }
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            {showAnswer && (
                                <button className="quiz-next" onClick={handleNextQuestion}>
                                    Next
                                </button>
                            )}
                            <div className="quiz-index">{currentQuestion + 1} of {questions.length} questions</div>
                        </>
                    ) : (
                        <div className="quiz-result">
                            <h2>Your Score: {score} / {questions.length}</h2>
                            <button className="quiz-next" onClick={handleRetakeQuiz}>Retake quiz</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlanetsQuiz;
