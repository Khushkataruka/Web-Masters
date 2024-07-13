const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const parser = require('body-parser')
const bcrypt = require('bcrypt')
const Login_model = require('./models/login')
const app = express()
const port = 3000

app.use(cors())
app.use(parser.json())

mongoose.connect("mongodb://localhost:27017/LoginSpaceData")
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', async (req, res) => {
    const user = await Login_model.findOne({ email: req.body.email })
    if (!user) {
        try {
            if (req.body.confirmPassword === req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                req.body.password = hashedPassword
                await Login_model.create(req.body)
                res.status(201).send({
                    message: "Registered successfully",
                    status: 201,
                    data: req.body
                })
            } else {
                res.status(400).send({
                    message: "Passwords do not match",
                    status: 400
                })
            }
        } catch (e) {
            res.status(500).send({
                message: "Error occurred during registration",
                status: 500,
                error: e.message
            })
        }
    } else {
        res.status(400).send({
            message: "Email already exists",
            status: 400
        })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Login_model.findOne({ email: email })
        if (!user) {
            return res.status(404).send({
                message: "User not found",
                status: 404
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Incorrect password",
                status: 401
            })
        }
        res.status(200).send({
            message: "Login successful",
            status: 200,
            data: user,
        })
    } catch (e) {
        res.status(500).send({
            message: "Login failed",
            status: 500,
            error: e.message
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
