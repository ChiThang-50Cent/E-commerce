const express = require("express");
const router = express.Router();

const product = require("./product.controller");

router.get("/", product.getProducts);
router.post("/create", product.createProduct);

module.exports = router;