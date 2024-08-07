import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Define the questions and answers
const questions = [
    {
        question: "Which constellation is known as the Hunter?",
        options: ["Orion", "Ursa Major", "Cassiopeia", "Scorpius"],
        answer: "Orion"
    },
    {
        question: "Which constellation contains the star Polaris, also known as the North Star?",
        options: ["Ursa Minor", "Ursa Major", "Draco", "Cepheus"],
        answer: "Ursa Minor"
    },
    {
        question: "Which constellation is known as the Scorpion?",
        options: ["Cancer", "Scorpius", "Sagittarius", "Aquarius"],
        answer: "Scorpius"
    },
    {
        question: "Which constellation is famous for the annual meteor shower known as the Perseids?",
        options: ["Leo", "Gemini", "Perseus", "Orion"],
        answer: "Perseus"
    },
    {
        question: "Which constellation is also known as the Great Bear?",
        options: ["Ursa Minor", "Canis Major", "Ursa Major", "Draco"],
        answer: "Ursa Major"
    },
    {
        question: "Which constellation is known as the Queen, represented by a W-shaped pattern of stars?",
        options: ["Andromeda", "Pegasus", "Auriga", "Cassiopeia"],
        answer: "Cassiopeia"
    },
    {
        question: "Which constellation represents a bull and contains the bright star Aldebaran?",
        options: ["Aries", "Taurus", "Leo", "Capricornus"],
        answer: "Taurus"
    },
    {
        question: "Which constellation is represented by a pair of fish tied together?",
        options: ["Cancer", "Aquarius", "Pisces", "Scorpius"],
        answer: "Pisces"
    },
    {
        question: "Which constellation is represented by a lion and contains the bright star Regulus?",
        options: ["Aries", "Sagittarius", "Leo", "Capricornus"],
        answer: "Leo"
    },
    {
        question: "Which constellation is represented by a centaur archer?",
        options: ["Centaurus", "Capricornus", "Pegasus", "Sagittarius"],
        answer: "Sagittarius"
    }
];

const Constellationquiz = () => {
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

export default Constellationquiz;
