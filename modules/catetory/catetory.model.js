const mongoose = require("mongoose");
const Joi = require("joi");

const catetorySchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Catetory = mongoose.model("Catetory", catetorySchema);

const validateCatetory = (catetory) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return schema.validate(catetory);
};

module.exports = { Catetory, validateCatetory };