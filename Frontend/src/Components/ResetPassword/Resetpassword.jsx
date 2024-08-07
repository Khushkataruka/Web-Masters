import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Resetpassword.css';
import Navbar from '../HomePage/Navbar/Navbar';

const ResetPassword = () => {
    const { id, token } = useParams(); // Correctly place useParams within the component
    const [loader, setLoader] = useState(false);
    const [resMessage, setResMessage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setLoader(true);
        try {
            const response = await fetch(`http://localhost:3001/reset-password/${id}/${token}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            setResMessage(responseData.message);
            console.log(responseData);
            if (responseData.status === 200) {
                alert("Password reset successfully");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error:", error);
            setResMessage("A network error occurred. Please try again.");
        } finally {
            setLoader(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="reset-container">
                {loader ? (
                    <div className="spinner-container">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <form className="reset-form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="reset-title">Reset Password</h2>
                        <div className="input-group">
                            <label htmlFor="new-password">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                {...register('newPassword', { required: 'New password is required' })}
                            />
                            {errors.newPassword && <p className="error-message">{errors.newPassword.message}</p>}
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: (value) =>
                                        value === watch('newPassword') || 'Passwords do not match'
                                })}
                            />
                            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                        </div>
                        <button type="submit" className="reset-button">Reset Password</button>
                        {resMessage && <p id="check">{resMessage}</p>}
                    </form>
                )}
            </div>
        </>
    );
};

export default ResetPassword;
