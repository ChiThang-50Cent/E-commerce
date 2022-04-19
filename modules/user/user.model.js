const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, minlength: 6, maxlength: 1024 },
    fullname: { type: String, required: true, trim: true },
    avatar: { type: String },
    phoneNumber: { type: String, trim: true, length: 10 },
    address: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { versionKey: false }
);

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      ..._.pick(this, [
        "_id",
        "fullname",
        "email",
        "avatar",
        "phoneNumber",
        "address",
        "isAdmin",
      ]),
    },
    process.env.APP_SECRET_KEY
  );
};

const User = mongoose.model("User", userSchema);
