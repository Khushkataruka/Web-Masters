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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
