const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Login_model = mongoose.model("registers", Schema)

module.exports = Login_model