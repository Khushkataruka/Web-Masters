import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// Define the questions and answers
const questions = [
    {
        question: "Which galaxy is the closest spiral galaxy to the Milky Way?",
        options: ["Andromeda Galaxy", "Triangulum Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
        answer: "Andromeda Galaxy"
    },
    {
        question: "What type of galaxy is the Milky Way?",
        options: ["Spiral", "Elliptical", "Irregular", "Lenticular"],
        answer: "Spiral"
    },
    {
        question: "What is the name of the largest galaxy in our local group of galaxies?",
        options: ["Andromeda Galaxy", "Milky Way", "Triangulum Galaxy", "IC 1101"],
        answer: "Andromeda Galaxy"
    },
    {
        question: "What is the term for the central region of a galaxy containing a supermassive black hole?",
        options: ["Nucleus", "Core", "Bulge", "Halo"],
        answer: "Nucleus"
    },
    {
        question: "What is the approximate number of galaxies in the observable universe?",
        options: ["2 billion", "50 billion", "100 billion", "200 billion"],
        answer: "100 billion"
    },
    {
        question: "What is the name of the galaxy cluster that the Milky Way is part of?",
        options: ["Virgo Cluster", "Local Group", "Coma Cluster", "Perseus Cluster"],
        answer: "Local Group"
    },
    {
        question: "Which galaxy is known for its bright star-forming regions and resembles a whirlpool?",
        options: ["Whirlpool Galaxy", "Pinwheel Galaxy", "Cigar Galaxy", "Antennae Galaxies"],
        answer: "Whirlpool Galaxy"
    },
    {
        question: "What type of galaxy is characterized by an elongated, smooth shape without much structure?",
        options: ["Elliptical", "Spiral", "Irregular", "Lenticular"],
        answer: "Elliptical"
    },
    {
        question: "What is the main component of the interstellar medium in galaxies?",
        options: ["Dust", "Gas", "Stars", "Dark Matter"],
        answer: "Gas"
    },
    {
        question: "What is the name of the process by which galaxies merge and form larger structures?",
        options: ["Galactic Evolution", "Galactic Cannibalism", "Galactic Merging", "Galactic Formation"],
        answer: "Galactic Cannibalism"
    }
];
const GalaxyQuiz = () => {
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setShowAnswer(false);
        setUserAnswer('');
        setCurrentQuestion(currentQuestion + 1);
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

export default GalaxyQuiz;
