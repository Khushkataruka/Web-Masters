import React, { useState, useEffect } from 'react';
import './Login.css';
import Navbar from '../HomePage/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const { register, handleSubmit } = useForm();
    const [res, setRes] = useState("");
    const [isLogged, setIsLogged] = useState(false); // State to manage login status
    const navigate = useNavigate();

    // Check local storage on component mount
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLogged');
        if (storedLoginStatus === 'true') {
            setIsLogged(true);
        }
    }, []);

    const onSubmit = async data => {
        try {
            const endpoint = isRegister ? "register" : "login";

            const response = await fetch(`http://localhost:3001/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            setRes(responseData.message);
            console.log(responseData);

            if ((response.status === 200 && !isRegister) || (response.status === 201 && isRegister)) {
                setIsLogged(true); // Set islogged to true upon successful login
                localStorage.setItem('isLogged', 'true'); // Store login status in local storage
                localStorage.setItem('name', responseData.data.name)
                localStorage.setItem('email', responseData.data.email)
                navigate("/");
                window.location.reload()
            }
        } catch (error) {
            console.error("Error:", error);
            setRes("A network error occurred. Please try again.");
        }
    };

    const toggleForm = () => setIsRegister(!isRegister);

    return (
        <>
            <Navbar isLogged={isLogged} /> {/* Pass islogged state to Navbar */}
            <div className="login-container">
                <video autoPlay muted loop id="login-video">
                    <source src="log-vi.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="login-title">{isRegister ? 'Register' : 'Login'}</h2>

                        {isRegister && (
                            <>
                                <div className="ip">
                                    <label htmlFor="name">Username</label>
                                    <input
                                        type="text"
                                        id="name"
                                        {...register("name", { required: true })}
                                    />
                                </div>
                            </>
                        )}

                        <div className="ip">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <div className="ip">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {isRegister && (
                            <div className="ip">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    {...register("confirmPassword", { required: true })}
                                />
                            </div>
                        )}

                        <button type="submit" className="login-button">
                            {isRegister ? 'Register' : 'Login'}
                        </button>

                        <p className="toggle-text" onClick={toggleForm}>
                            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
                        </p>
                        <p className="toggle-text">
                            {!isRegister ? <Link to={"/forget"}>Forget Password</Link> : ""}
                        </p>
                        <p id="check">{res}</p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
