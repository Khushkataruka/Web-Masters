import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>
                        <span id="Cosmic">Cosmic</span>
                        <span id="Voyage">Voyage</span>
                    </h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
