const mongoose = require("mongoose");
const Joi = require("joi");

const voucherUsageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, required: true },
    voucherId: { type: mongoose.Schema.ObjectId, required: true },
    usingDate: { type: Date, required: true },
});

const VoucherUsage = mongoose.model("voucherUsage", voucherUsageSchema);

const validateVoucherUsage = (voucherUsage) => {
    const schema = Joi.object({
        userId: Joi.required(),
        voucherId: Joi.required(),
        usingDate: Joi.date().required(),
    });

    return schema.validate(voucherUsage);
};

module.exports = { VoucherUsage, validateVoucherUsage };