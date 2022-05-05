const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const timeout = require("connect-timeout");

const environment = require("../environments/environment.local");

const API = require("../constants/default");
const user = require("../modules/user/user.route");
const product = require("../modules/product/product.route");
const upload = require("../modules/upload/upload.route");
const cateory = require("../modules/catetory/catetory.route");

module.exports = (app) => {
    app.use(timeout("15s"));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
        cors({
            origin: environment.client,
        })
    );
    app.use(helmet());
    app.use(express.json());

    app.use(API.USER_API, user);
    app.use(API.PRODUCT_API, product);
    app.use(API.UPLOAD_API, upload);
    app.use(API.CATETORY_API, cateory);
};