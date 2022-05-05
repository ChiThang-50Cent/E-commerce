const express = require("express");
const router = express.Router();

const upload = require("./upload.controller");
const authorization = require("../../middlewares/authorization.middleware");
const adminAuthoriztion = require("../../middlewares/adminAuthorization.middleware");

router.post("/", upload.upload);

router.post("/destroy", authorization, adminAuthoriztion, upload.destroy);

module.exports = router;