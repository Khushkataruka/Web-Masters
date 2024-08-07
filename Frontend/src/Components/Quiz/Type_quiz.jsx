import React from 'react'
import { Link } from 'react-router-dom'
import './Type_quiz.css'

const Type_quiz = () => {
    return (
        <div className="video-quizcontainer">
            <div className="options-container">
            <video src='quiz-vi.mp4' autoPlay muted playsInline loop>
            Unable to Play video</video>
                <div className="all">
                    <h1 className="optionhead">Which Quiz Would You like to Play</h1>
                    <ul>
                        <li><Link to={"/quiz-planets"}>Planets</Link></li>
                        <li><Link to={"/quiz-constellation"}>Constellation</Link></li>
                        <li><Link to={"/quiz-galaxies"}>Galaxies</Link></li>
                        <li><Link to={"/quiz-general"}>General</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Type_quiz
