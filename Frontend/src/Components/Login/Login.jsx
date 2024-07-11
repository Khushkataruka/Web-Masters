import React, { useState } from 'react';
import './Login.css';
import Navbar from '../HomePage/Navbar/Navbar';
import { useForm } from 'react-hook-form';

function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        try {
            const response = await fetch("http://localhost:3000/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.text();
            console.log(responseData);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toggleForm = () => setIsRegister(!isRegister);

    return (
        <>
            <Navbar />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="login-title">{isRegister ? 'Register' : 'Login'}</h2>

                    {isRegister && (
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                {...register("name", { required: true })}
                            />
                        </div>
                    )}

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", { required: true })}
                        />
                    </div>

                    {isRegister && (
                        <div className="input-group">
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
                </form>
            </div>
        </>
    );
}

export default Login;
