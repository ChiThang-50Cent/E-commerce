const express = require("express");
const router = express.Router();

const catetory = require("./catetory.controller");
const authorization = require("../../middlewares/authorization.middleware");
const adminAuthorization = require("../../middlewares/adminAuthorization.middleware");

router.get("/", authorization, adminAuthorization, catetory.getCatetory);
router.post(
    "/create",
    authorization,
    adminAuthorization,
    catetory.createCatetory
);
router.get(
    "/delete/:id",
    authorization,
    adminAuthorization,
    catetory.deleteCatetory
);

module.exports = router;