import React, { useState } from 'react';
import './Forgot.css';
import Navbar from '../HomePage/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Forgot() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const [res, setRes] = useState(""); // State to hold response message
    const [loader, setloader] = useState(false)

    const onSubmit = async (data) => {
        setloader(true)
        try {
            const response = await fetch("http://localhost:3001/forgot-password", {
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
            if (responseData.status === 200) {
                alert("Your email has been sent successfully! Please check your inbox and click on the link provided to reset your password. ")
                navigate("/login"); // Use navigate for redirection
            }
        } catch (error) {
            console.error("Error:", error);
            setRes("A network error occurred. Please try again.");
        }
        finally {

            setloader(false);

        }
    };

    return (
        <>
            <Navbar />
            <div className="forgot-password-container">
                {loader ? (<div className="spinner-container">
                    <div className="spinner"></div>
                </div>) :
                    (<form className="forgot-password-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="forgot-password-title">Forgot Password</h2>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                            />
                        </div>

                        <button type="submit" className="forgot-password-button">
                            Reset Password
                        </button>

                        <p id="check">{res}</p>
                    </form>)
                }
            </div>
        </>
    );
}

export default Forgot;
