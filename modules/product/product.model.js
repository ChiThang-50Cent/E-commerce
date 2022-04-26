const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    detail: { type: String, required: true },
    //catetory: { type: mongoose.Schema.ObjectId, required: true },
    catetory: { type: String },
    description: { type: [{ type: String }] },
});

const Products = mongoose.model("Products", productSchema);

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().required(),
        detail: Joi.string().required(),
        catetory: Joi.required(),
        description: Joi.array().items(Joi.string().required()),
    });

    return schema.validate(product);
};

module.exports = { Products, validateProduct };