const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: {
        type: [{
            public_id: { type: String, required: true },
            url: { type: String, required: true },
        }, ],
        required: true,
    },
    detail: { type: String, required: true },
    catetory: { type: String, required: true },
    description: { type: [{ type: String }] },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Products = mongoose.model("Products", productSchema);

const validateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.array()
            .items({
                public_id: Joi.string().required(),
                url: Joi.string().required(),
            })
            .required(),
        stock: Joi.number().required(),
        detail: Joi.string().required(),
        catetory: Joi.string().required(),
        description: Joi.array().items(Joi.string().required()),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
    });

    return schema.validate(product);
};

module.exports = { Products, validateProduct };