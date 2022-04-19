require("dotenv").config();
const express = require("express");

const app = express();

require("./setup/database")();
require("./setup/routes")(app);

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
