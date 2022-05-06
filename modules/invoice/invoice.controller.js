const { Invoice, validateInvoice } = require("./invoice.model");

const getInvoice = async(req, res) => {
    try {
        const invoices = await Invoice.find({ _id: req.user._id });

        res.json({
            status: "success",
            result: invoices.length,
            invoices,
        });
    } catch {
        return res.status(500).json({ msg: err.message });
    }
};

const createInvoice = async(req, res) => {
    const { error } = validateInvoice(req.body);

    if (error) {
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });
    }

    try {
        const { userId, products, total, voucherId } = req.body;

        const newInvoice = await Invoice({
            userId,
            products,
            total,
            voucherId,
        });

        await newInvoice.save();
        res.json({ msg: "Created an invoice." });
    } catch {
        return res.status(500).json({ msg: err.message });
    }
};

const deleteInvoice = async(req, res) => {
    try {
        await Invoice.findByIdAndDelete(req.params.id);
        res.json({ msg: "Deleted an invoice." });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { getInvoice, createInvoice, deleteInvoice };