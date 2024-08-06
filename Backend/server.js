const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const parser = require('body-parser');
const bcrypt = require('bcrypt');
const Login_model = require('./models/login');
const Feedback_model = require('./models/Feedback')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(parser.json());

mongoose.connect("mongodb://localhost:27017/LoginSpaceData");

app.get('/', (req, res) => {
    res.send('Hello World!');//response
});



app.post('/register', async (req, res) => {
    const user = await Login_model.findOne({ email: req.body.email });
    if (!user) {
        try {
            if (req.body.confirmPassword === req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body.password = hashedPassword;
                await Login_model.create(req.body);
                res.status(201).send({
                    message: "Registered successfully",
                    status: 201,
                    data: req.body
                });
            } else {
                res.status(400).send({
                    message: "Passwords do not match",
                    status: 400
                });
            }
        } catch (e) {
            res.status(500).send({
                message: "Error occurred during registration",
                status: 500,
                error: e.message
            });
        }
    } else {
        res.status(400).send({
            message: "Email already exists",
            status: 400
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Login_model.findOne({ email: email });
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                status: 404
            });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Incorrect password",
                status: 401
            });
        }
        res.status(200).send({
            message: "Login successful",
            status: 200,
            data: user,
        });
    } catch (e) {
        res.status(500).send({
            message: "Login failed",
            status: 500,
            error: e.message
        });
    }
});

app.post("/forgot-password", async (req, res) => {
    const { email } = req.body; // Corrected the variable name from 'mail' to 'email'
    try {
        const user = await Login_model.findOne({ email: email });
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                status: 404
            });
        }
        const token = jwt.sign({ id: user._id }, "jwtwefvfdhgfvsdn123Fdsgv!@$233", { expiresIn: "1d" });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'cosmicvoyage001@gmail.com',
                pass: 'rqwp ovqn qkbo svnb'
            }
        });

        const mailOptions = {
            from: 'cosmicvoyage001@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                   Please click on the following link, or paste this into your browser to complete the process:\n\n
                   http://localhost:5173/reset-password/${user._id}/${token}\n\n
                   If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send({
                    message: "Failed to send email",
                    status: 500,
                    error: error.message
                });
            } else {
                return res.status(200).send({
                    message: "Password reset email sent successfully",
                    status: 200,
                    data: email
                });
            }
        });

    } catch (e) {
        res.status(500).send({
            message: "An error occurred",
            status: 500,
            error: e.message
        });
    }
});

app.post("/reset-password/:id/:token", async (req, res) => {
    const { newPassword } = req.body;
    const { id, token } = req.params;

    try {
        const decoded = jwt.verify(token, "jwtwefvfdhgfvsdn123Fdsgv!@$233");

        if (decoded.id !== id) {
            return res.status(401).send({
                message: "Invalid token",
                status: 401
            });
        }

        const user = await Login_model.findOne({ _id: id });
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                status: 404
            });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).send({
            message: "Password reset successful",
            status: 200
        });
    } catch (e) {
        res.status(500).send({
            message: "An error occurred",
            status: 500,
            error: e.message
        });
    }
});

app.post('/connect', async (req, res) => {

    try {
        const user = await Login_model.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                message: "Register  with given email to connect",
                status: 104
            });
        }
        else {
            Feedback_model.create(req.body)
            return res.send({
                message: "Your Message Was recieved successfully",
                staus: 208
            })

        }
    }
    catch (e) {
        res.status(500).send({
            message: e.message,
            status: 500
        })
    }
})
app.post("/subscribe", async (req, res) => {
    const email = req.body.Email; // Extract email from request body
    console.log('Received email:', email); // For debugging

    if (!email) {
        return res.status(400).send({
            message: "Email is required",
            status: 400
        });
    }

    try {
        // Check if user exists
        const user = await Login_model.findOne({ email });
        if (!user) {
            return res.status(401).send({
                message: "Please login to subscribe",
                status: 401
            });
        }

        // Set up email transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'cosmicvoyage001@gmail.com',
                pass: 'rqwp ovqn qkbo svnb'
            }
        });

        const mailOptions = {
            from: 'cosmicvoyage001@gmail.com',
            to: email,
            subject: 'Subscription Confirmation',
            text: 'You have successfully subscribed to Cosmic Voyage. Thank you for subscribing!'
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).send({
            message: "Subscribed successfully",
            status: 200
        });
    } catch (error) {
        console.error('Error sending email:', error); // Log the error for debugging
        res.status(500).send({
            message: "Failed to subscribe. Please try again later.",
            status: 500,
            error: error.message
        });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
