const mongoose = require("mongoose");
const Joi = require("joi");

const voucherSchema = new mongoose.Schema({
    code: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    value: { type: Number, required: true },
});

const Voucher = mongoose.model("Voucher", voucherSchema);

const validateVoucher = (voucher) => {
    const schema = Joi.object({
        code: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        value: Joi.number().required(),
    });

    return schema.validate(voucher);
};

module.exports = { Voucher, validateVoucher };