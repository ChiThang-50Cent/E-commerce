const { Catetory, validateCatetory } = require("./catetory.model");

const getCatetory = async(req, res) => {
    try {
        const catetorys = await Catetory.find();

        res.json({
            status: "success",
            result: catetorys.length,
            catetorys: catetorys,
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const createCatetory = async(req, res) => {
    const { error } = validateCatetory(req.body);

    if (error) {
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });
    }

    try {
        const { name } = req.body;

        const newCatetory = await Catetory({
            name,
        });

        await newCatetory.save();
        res.json({ msg: "Created a cateory." });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const deleteCatetory = async(req, res) => {
    try {
        await Catetory.findByIdAndDelete(req.params.id);
        res.json({ msg: "Deleted a catetory." });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { getCatetory, createCatetory, deleteCatetory };