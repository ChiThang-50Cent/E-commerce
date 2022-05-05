const express = require("express");
const router = express.Router();

const product = require("./product.controller");
const authorization = require("../../middlewares/authorization.middleware");
const adminAuthorization = require("../../middlewares/adminAuthorization.middleware");

router.get("/", product.getProducts);
router.post(
    "/create",
    authorization,
    adminAuthorization,
    product.createProduct
);

module.exports = router;