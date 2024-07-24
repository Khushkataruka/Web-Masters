import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import PersonRounded from '@mui/icons-material/PersonRounded';
import LocalPhoneRounded from '@mui/icons-material/LocalPhoneRounded';
import Article from '@mui/icons-material/Article';
import Login from '@mui/icons-material/Login';

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
            <nav className='navbar'>
                <input type='checkbox' id='myCheckboxMenu'></input>
                <div className="links-menu">
                    <div className="menu-cross"><label htmlFor='myCheckboxMenu'><CloseRoundedIcon /></label></div>
                    <ul>
                        <li onClick={() => { window.location.reload() }}><HomeRounded /><Link to="/">Home</Link></li>
                        <li onClick={() => { window.location.reload }}><PersonRounded /><Link to="/about">About</Link></li>
                        <li onClick={() => { window.location.reload }}><LocalPhoneRounded /><Link to="/about">Contact Us</Link></li>
                        <li onClick={() => { window.location.reload }}><Article /><Link to="/news">News</Link></li>
                        <li><Login />
                            {isLogged ? (
                                <a href="/" onClick={handleLogout}>Logout</a>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <h1>
                        <span id="Cosmic">Cosmic</span>
                        <span id="Voyage">Voyage</span>
                    </h1>
                </div>
                <div className="links">
                    <ul>
                        <li onClick={() => { window.location.reload() }}><Link to="/">Home</Link></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/about">About</Link></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/news">News</Link></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/contact">Contact us</Link></li>
                        <li>
                            {isLogged ? (
                                <a href="/" onClick={handleLogout}>Logout</a>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="menu-bar"><label htmlFor='myCheckboxMenu'><MenuIcon /></label></div>
            </nav>
        </div>
    );
}

export default Navbar;
