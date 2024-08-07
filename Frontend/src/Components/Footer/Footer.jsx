import React, { useState } from 'react';
import './Footer.css';
import { useForm } from 'react-hook-form';
import { FacebookRounded, Twitter, X, YouTube, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    const { register, handleSubmit } = useForm();
    const [loader, setLoader] = useState(false); // Consistent naming

    const onSubmit = async (data) => {
        setLoader(true); // Show loader
        try {
            const response = await fetch(`http://localhost:3001/subscribe`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            alert(responseData.message);
            console.log(responseData);
        } catch (error) {
            alert("An error occurred");
            console.error(error.message); // Fixed error message logging
        } finally {
            setLoader(false); // Hide loader
        }
    };

    return (
        <div>

            <footer>
                <div className="footer-content">
                    <div className="footer-child">
                        <div className="footer-title">
                            <h3 className='logo'>
                                <span id="Cosmic">Cosmic</span>
                                <span id="Voyage">Voyage</span>
                            </h3>
                            <p>Embark on a journey through the cosmos with Cosmic Voyage, where the universe is our destination</p>
                        </div>
                        <div className='temp'>
                            <div className="temp-child">
                                <div className="footer-links">
                                    <ul>
                                        <li className="tags"><a href="/">Home</a></li>
                                        <li className="tags"><a href="/about">About Us</a></li>
                                        <li className="tags"><a href="/news">News</a></li>
                                        <li className="tags"><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <ul>
                                        <li className="tags"><a href="/planets">Planets</a></li>
                                        <li className="tags"><a href="/stars">Stars</a></li>
                                        <li className="tags"><a href="/galaxies">Galaxies</a></li>
                                        <li className="tags"><a href="/constellation">Constellations</a></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <ul>
                                        <li className="tags"><a href="/quiz">Quiz</a></li>
                                        <li className="tags"><a href="/center">Space Centers</a></li>
                                        <li className="tags"><a href="/login">Sign up / Log in</a></li>
                                    </ul>
                                </div>
                                <div className="symbols">
                                    <p>Follow us </p>
                                    <div className="social-media">
                                        <ul>
                                            <li id='facebook'><a href='#'><FacebookRounded /></a></li>
                                            <li id='twitter'><a href='#'><Twitter /></a></li>
                                            <li id='x'><a href='#'><X /></a></li>
                                            <li id='youtube'><a href='#'><YouTube /></a></li>
                                            <li id='instagram'><a href='#'><Instagram /></a></li>
                                            <li id='linkedin'><a href='#'><LinkedIn /></a></li>
                                        </ul>
                                    </div>
                                    <div className="email-subscription">
                                        <form className="subscription-form" onSubmit={handleSubmit(onSubmit)}>
                                            <label htmlFor="email">Subscribe</label> <br /> <br /> <br />
                                            <div className="loader-sub">
                                                <div className='email-button'>
                                                    <input type="email" placeholder="E-Mail Address" {...register("Email")} />
                                                    <button type="submit">Send</button>
                                                    {loader && (
                                                        <div className="foot-spinner">
                                                            <div className="footspinner"></div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>Copyright  © <a href="#">Web Masters</a></p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
