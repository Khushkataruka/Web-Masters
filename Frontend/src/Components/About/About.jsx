import React from 'react';
import './About.css';
import Navbar from '../HomePage/Navbar/Navbar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure this import is correct


const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200,
            easing: 'ease-in-out',
            once: false, // Set this to false to allow animation every time you scroll
            mirror: true, // Set this to true to allow elements to animate out while scrolling past them
        });
        document.querySelector(".hero-content").style.top = "0";
        document.querySelector(".hero-content").style.opacity = "1";
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <section className="about-us">
                    <div className="a-container">
                        <video autoPlay muted playsInline loop src='cosmic-vi.mp4'></video>
                        <div className="abt-background">
                            <div className="hero-content" data-aos="fade-up">
                                <h2>Exploring the Cosmos</h2>
                                <p>Join us as we embark on a journey to uncover the secrets of the universe.</p>
                            </div>
                        </div>
                        <div className="about-content">
                            <h2>About Us</h2>
                            <p>
                                Welcome to Cosmic Voyage, your gateway to the wonders of the universe. We are dedicated to exploring the vast expanses of space and uncovering the mysteries that lie beyond our world. Our mission is to inspire curiosity, foster a deeper understanding of the cosmos, and push the boundaries of space exploration through cutting-edge research and innovative space missions.
                            </p>
                            <div className="about-background" data-aos="fade-up">
                                <div className="some-content">
                                    <h1>The Wonders of Space Exploration</h1>
                                    <p> Explore The World</p>
                                </div>
                            </div>
                            <h3 data-aos="fade-up">Our Mission</h3>
                            <p data-aos="fade-up">
                                At Cosmic Voyage, we believe that the universe holds the keys to many of the questions humanity has pondered for centuries. Our mission is to advance space exploration by deploying state-of-the-art spacecraft and collaborating with leading space agencies around the globe. We aim to conduct groundbreaking studies on the formation and evolution of celestial bodies, from the planets in our solar system to the distant galaxies far beyond.
                            </p>
                            <h3 data-aos="fade-up">What We Do</h3>
                            <div className="features" data-aos="fade-up">
                                <div className="three-features">
                                    <div className="feature">
                                        <div className="feature-background feature-bg1"></div>
                                        <h4>Exploration</h4>
                                        <p>Our missions are designed to explore uncharted territories in space, from the icy moons of Jupiter and Saturn to the enigmatic regions of interstellar space.</p>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-background feature-bg2"></div>
                                        <h4>Research</h4>
                                        <p>Through our extensive research programs, we investigate cosmic phenomena such as black holes, supernovae, and the potential for life on other planets.</p>
                                    </div>
                                    <div className="feature">
                                        <div className="feature-background feature-bg3"></div>
                                        <h4>Innovation</h4>
                                        <p>We leverage the latest technological advancements to develop innovative spacecraft and instruments that can withstand the harsh conditions of space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;
