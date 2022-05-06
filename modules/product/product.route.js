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
router.get(
    "delete/:id",
    authorization,
    adminAuthorization,
    product.deleteProduct
);
router.post(
    "update/:id",
    authorization,
    adminAuthorization,
    product.updateProduct
);

module.exports = router;