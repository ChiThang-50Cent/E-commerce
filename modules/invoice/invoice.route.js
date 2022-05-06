const express = require("express");
const router = express.Router();

const invoice = require("./invoice.controller");
const authorization = require("../../middlewares/authorization.middleware");

router.get("/", authorization, invoice.getInvoice);

router.post("/create", authorization, invoice.createInvoice);

router.get("/delete/:id", authorization, invoice.deleteInvoice);

module.exports = router;