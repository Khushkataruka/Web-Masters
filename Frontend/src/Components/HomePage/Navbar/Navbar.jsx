import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLogged") === "true";
        setIsLogged(loggedInStatus);
    }, []);

    const handleLogout = () => {
        alert("Logout Succesfully")
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.setItem("isLogged", "false");
        setIsLogged(false);
        window.location.reload()
    };

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
                        <li onClick={() => { window.location.reload() }}><Link to="/">Home</Link></li>
                        <li onClick={()=>{window.location.reload}}><Link to="/about">About</Link></li>
                        <li onClick={()=>{window.location.reload}}><Link to="/news">News</Link></li>
                        <li>
                            {isLogged ? (
                                <a href="/" onClick={handleLogout}>Logout</a>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
