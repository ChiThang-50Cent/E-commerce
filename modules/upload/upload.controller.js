const cloudinary = require("cloudinary");

// we will upload image cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Upload image only admin can use
const upload = (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0)
            return res.status(500).json({ msg: "No files were uploaded." });

        const file = req.files.file;
        if (file.size > 1024 * 1024) {
            return res.status(400).json({ msg: "Size too large." });
        }

        if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
            return res.status(400).json({ msg: "File format is incorrect." });
        }

        cloudinary.v2.uploader.upload(
            file.tempFilePath, { folder: "MindX-Ecommerce" },
            async(err, result) => {
                if (err) throw err;

                res.json({ public_id: result.public_id, url: result.secure_url });
            }
        );
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

// Delete Image only admin can use
const destroy = (req, res) => {
    try {
        const { public_id } = req.body;
        if (!public_id) return res.status(400).json({ msg: "No images selected." });

        cloudinary.v2.uploader.destroy(public_id, async(err, result) => {
            if (err) throw err;

            res.json({ msg: "Deleted image." });
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { upload, destroy };