const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
})

const Feedback_model = mongoose.model("Feedbacks", Schema)

module.exports = Feedback_model