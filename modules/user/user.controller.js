const bcrypt = require("bcrypt");

const { User, validateLogin, validateRegister } = require("./user.model");

const login = async(req, res) => {
    const { error } = validateLogin(req.body);
    if (error)
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).send({
            isError: true,
            message: "Invalid email or password",
        });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send({
            isError: true,
            message: "Invalid email or password",
        });

    delete user._doc.password;
    const token = user.generateAuthToken({...user._doc });

    return res
        .header("x-auth-token", token)
        .status(200)
        .send({ isError: false, message: "Login successfully" });
};

const register = async(req, res) => {
    const { error } = validateRegister(req.body);

    if (error)
        return res
            .status(400)
            .send({ isError: true, message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
        return res.status(400).send({
            isError: true,
            message: "Username existed",
        });

    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const newUser = await User({
        email: req.body.email,
        fullname: req.body.fullname,
        password: passwordHash,
    });

    await newUser.save();

    return res
        .status(200)
        .send({ isError: false, message: "Register successfully" });
};

module.exports = { login, register };