const { User } = require("../modules/user/user.model");

const adminAuthorization = async(req, res, next) => {
    try {
        // Get user information by id
        const user = await User.findOne({
            _id: req.user._id,
        });

        if (!user.isAdmin)
            return res.status(400).json({ msg: "Admin resources access denied." });

        next();
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = adminAuthorization;