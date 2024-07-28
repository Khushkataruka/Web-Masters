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
        alert("Logout Successfully");
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.setItem("isLogged", "false");
        setIsLogged(false);
        window.location.reload();
    };

    return (
        <div>
            <nav className='navbar'>
                <input type='checkbox' id='myCheckboxMenu'></input>
                <div className="links-menu">
                    <div className="menu-cross"><label htmlFor='myCheckboxMenu'><CloseRoundedIcon /></label></div>
                    <ul>
                        <li onClick={() => { window.location.reload() }}><HomeRounded /><Link to="/">Home</Link></li>
                        <li onClick={() => { window.location.reload() }}><PersonRounded /><Link to="/about">About</Link></li>
                        <li className="dropdown">
                            <LocalPhoneRounded />
                            <Link to="/contact">Contact Us</Link>
                            <div className="dropdown-content">
                                <Link to="/contact/email">Email</Link>
                                <Link to="/contact/phone">Phone</Link>
                                <Link to="/contact/address">Address</Link>
                            </div>
                        </li>
                        <li onClick={() => { window.location.reload() }}><Article /><Link to="/news">News</Link></li>
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
                        <li className="dropdown">
                            <button className='nav-more'>More <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-auto h-7 w-7 shrink-0 opacity-80"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
                            <div className="dropdown-content">
                                <Link to="/contact/email">Email</Link>
                                <Link to="/contact/phone">Phone</Link>
                                <Link to="/contact/address">Address</Link>
                            </div>
                        </li>
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
