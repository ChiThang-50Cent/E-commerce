const mongoose = require("mongoose");
const Joi = require("joi");

const newSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const News = mongoose.model("News", newSchema);

const validateNews = (news) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
    });

    return schema.validate(news);
};

module.exports = { News, validateNews };