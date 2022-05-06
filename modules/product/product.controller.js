const { Products, validateProduct } = require("./product.model");

const getProducts = async(req, res) => {
    try {
        const products = await Products.find();

        res.json({
            status: "success",
            result: products.length,
            products: products,
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const createProduct = async(req, res) => {
    const { error } = validateProduct(req.body);

    if (error) {
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });
    }

    try {
        const { name, price, image, detail, catetory, description } = req.body;
        if (!image) return res.status(400).json({ msg: "No image upload." });

        const newProduct = await Products({
            name,
            price,
            image,
            detail,
            catetory,
            description,
        });

        await newProduct.save();
        res.json({ msg: "Created a product." });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const deleteProduct = async(req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id);
        res.json({ msg: "Deleted a product." });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const updateProduct = async(req, res) => {
    const { error } = validateProduct(req.body);

    if (error) {
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });
    }

    try {
        const { name, price, image, detail, catetory, description } = req.body;

        await Products.findOneAndUpdate({ _id: req.params.id }, {
            name,
            price,
            image,
            detail,
            catetory,
            description,
        });

        res.json({ msg: "Updated a product" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { getProducts, deleteProduct, updateProduct, createProduct };