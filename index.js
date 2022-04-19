require("dotenv").config();
const express = require("express");

const app = express();

require('./setup/database')();

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});