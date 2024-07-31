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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLogged") === "true";
        setIsLogged(loggedInStatus);
    }, []);

    const handleLogout = () => {
        alert("Logout Successfully");
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.setItem("isLogged", "false");
        setIsLogged(false);
        window.location.reload();
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <div>
            <nav className='navbar'>
                <input type='checkbox' id='myCheckboxMenu' />
                <div className="links-menu">
                    <div className="menu-cross"><label htmlFor='myCheckboxMenu'><CloseRoundedIcon /></label></div>
                    <ul>
                        <li onClick={() => { window.location.reload() }}><HomeRounded /><Link to="/">Home</Link>
                        </li>

                        <li onClick={() => { window.location.reload() }}><PersonRounded /><Link to="/about">About</Link></li>

                        <li onClick={() => { window.location.reload() }}><LocalPhoneRounded /><Link to="/contact">Contact Us</Link></li>
                        <li onClick={() => { window.location.reload() }}><Article /><Link to="/news">News</Link></li>
                        <li className="dropdown" onClick={toggleDropdown}>
                            <span className="more-text"> <MoreHorizIcon /> More </span>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li onClick={() => { window.location.reload() }}><Link to="/planets">Planets</Link></li>
                                    <li onClick={() => { window.location.reload() }}><Link to="/Stars">Stars</Link></li>
                                    <li onClick={() => { window.location.reload() }}><Link to="/Galaxies">Galaxies</Link></li>
                                    <li onClick={() => { window.location.reload() }}><Link to="/constellation">Constellations</Link></li>
                                    <li onClick={() => { window.location.reload() }}><Link to="/center">Space Center</Link></li>
                                    <li onClick={() => { window.location.reload() }}><Link to="/quiz">Quiz</Link></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Login />
                            {isLogged ? (
                                <a href="/" onClick={handleLogout}>Logout</a>
                            ) : (
                                <Link to="/login">Login</Link>

                            )}
                            <hr className='underline' />
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
                        <li onClick={() => { window.location.reload() }}><Link to="/">Home</Link>
                            <hr className='underline' /></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/about">About</Link>  <hr className='underline' /></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/news">News</Link>  <hr className='underline' /></li>
                        <li onClick={() => { window.location.reload() }}><Link to="/contact">Contact us</Link>  <hr className='underline' /></li>
                        <li className="dropdown">
                            <span className="more-text">More <ExpandMoreIcon className="more-icon" /></span>
                            <ul className="dropdown-menu">
                                <li onClick={() => { window.location.reload() }}><Link to="/planets">Planets</Link></li>
                                <li onClick={() => { window.location.reload() }}><Link to="/Stars">Stars</Link></li>
                                <li onClick={() => { window.location.reload() }}><Link to="/Galaxies">Galaxies</Link></li>
                                <li onClick={() => { window.location.reload() }}><Link to="/constellation">Constellations</Link></li>
                                <li onClick={() => { window.location.reload() }}><Link to="/center">Space Center</Link></li>
                                <li onClick={() => { window.location.reload() }}><Link to="/quiz">Quiz</Link></li>
                            </ul>
                        </li>
                        <li>
                            {isLogged ? (
                                <a href="/" onClick={handleLogout}>Logout</a>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                            <hr className='underline' />
                        </li>
                    </ul>
                </div>
                <div className="menu-bar"><label htmlFor='myCheckboxMenu'><MenuIcon /></label></div>
            </nav>
        </div>
    );
}

export default Navbar;
