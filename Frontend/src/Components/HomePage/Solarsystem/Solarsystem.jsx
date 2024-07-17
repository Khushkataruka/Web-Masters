import React, { useRef, useState, useEffect } from 'react';
import './Solarsystem.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const Solarsystem = () => {
    const scrollContainerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; // Number of slides

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth;

        let newSlide = currentSlide;
        if (direction === 'left') {
            newSlide = Math.max(currentSlide - 1, 0);
        } else {
            newSlide = Math.min(currentSlide + 1, totalSlides - 1);
        }

        setCurrentSlide(newSlide);
        container.scrollTo({ left: newSlide * scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleResize = () => {
            const container = scrollContainerRef.current;
            container.scrollTo({ left: currentSlide * container.clientWidth, behavior: 'smooth' });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentSlide]);

    return (
        <div className="scroll-container">
            <div className="scroll-content-container" ref={scrollContainerRef}>
                <div className="scroll-content" id="scroll-content1">
                    <div className='box'>
                        <div className="text"><h2>Planets</h2></div>
                        <div className="b1"> <Link to="/planets" className="link">Learn more</Link></div>
                    </div>
                </div>
                <div className="scroll-content" id="scroll-content2">
                    <div className='box'>
                        <div className="text"><h2>Stars</h2></div>
                        <div className="b1"> <Link to="/center" className="link">Learn more</Link></div>
                    </div>
                </div>
                <div className="scroll-content" id="scroll-content3">
                    <div className='box'>
                        <div className="text"><h2>Galaxies</h2></div>
                        <div className="b1"> <Link to="/center" className="link">Learn more</Link></div>
                    </div>
                </div>
                <div className="scroll-content" id="scroll-content4">
                    <div className='box'>
                        <div className="text"><h2>Constellation</h2></div>
                        <div className="b1"> <Link to="/center" className="link">Learn more</Link></div>
                    </div>
                </div>
            </div>
            <div className="scroll-controls">
                <button id='but-left' onClick={() => scroll('left')}><ArrowBackIosNewRoundedIcon /></button>
                <button id='but-right' onClick={() => scroll('right')}><ArrowForwardIosRoundedIcon /></button>
            </div>
        </div>
    );
};

export default Solarsystem;
