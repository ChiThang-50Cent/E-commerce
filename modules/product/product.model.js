const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    detail: { type: String },
    catetory: { type: mongoose.ObjectId },
    description: { type: Array[{ type: String }] }
})

module.exports = { productSchema }