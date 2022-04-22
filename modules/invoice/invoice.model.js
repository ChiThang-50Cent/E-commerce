const mongoose = require("mongoose");
const Joi = require("joi");

const invoiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, required: true },
    products: {
        type: Array[{
            id: { type: mongoose.Schema.ObjectId, required: true },
            quantity: { type: Number, required: true },
        }],
    },
    total: { type: Number, required: true },
    voucherId: { type: mongoose.Schema.ObjectId },
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

const validateInvoice = (invoice) => {
    const schema = Joi.object({
        userId: Joi.required(),
        products: Joi.array().items(
            Joi.object({
                id: Joi.required(),
                quantity: Joi.number().required(),
            })
        ),
        total: Joi.number().required(),
    });

    return schema.validate(invoice);
};

module.exports = { Invoice, validateInvoice };