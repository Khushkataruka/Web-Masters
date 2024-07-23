import React from 'react';
import './Footer.css';
import { FacebookRounded, Twitter, X, YouTube, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <div className="footer-child">
                        <div className="footer-title">
                            <h3 className='logo'><span id="Cosmic">Cosmic</span>
                                <span id="Voyage">Voyage</span></h3>
                            <p>Embark on a journey through the cosmos with Cosmic Voyage, where the universe is our destination</p>
                        </div>
                        <div className='temp'>
                            <div className="temp-child">
                                <div className="footer-links">
                                    <ul>
                                        <li className="tags"><a href="/">Home</a></li>
                                        <li className="tags"><a href="/about">About</a></li>
                                        <li className="tags"><a href="/news">News</a></li>
                                        <li className="tags"><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <ul >
                                        <li className="tags"><a href="/planets">Planets</a></li>
                                        <li className="tags"><a href="#">Stars</a></li>
                                        <li className="tags"><a href="#">Galaxies</a></li>
                                        <li className="tags"><a href="#">Constellations</a></li>
                                    </ul>
                                </div>
                                <div className="footer-links">
                                    <ul>
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
                                        <form className="subscription-form">
                                            <label htmlFor="email">Subscribe</label> <br /> <br /> <br />
                                            <div className='email-button'>
                                                <input type="email" placeholder="E-Mail Address" id="email" />
                                                <button type="submit">Send</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>Copyright  © <a href="#">Web Masters</a>  </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
