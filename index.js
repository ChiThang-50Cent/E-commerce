require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8000;

const app = express();

require("./setup/database")();
require("./setup/routes")(app);

app.listen(PORT, () => {
    console.log("Server is running at port 8000");
});