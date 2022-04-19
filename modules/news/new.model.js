const mongoose = require('mongoose')

const newSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String }
})

module.exports = { newSchema }